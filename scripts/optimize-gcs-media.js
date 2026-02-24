'use strict';

require('dotenv').config();
const { Storage } = require('@google-cloud/storage');
const sharp = require('sharp');
const ffmpeg = require('fluent-ffmpeg');
const ffmpegStatic = require('ffmpeg-static');
const fs = require('fs').promises;
const path = require('path');
const os = require('os');

ffmpeg.setFfmpegPath(ffmpegStatic);

// ─── Configuration ────────────────────────────────────────────────────────────

const BUCKET_NAME = 'knbl_website';
const OPTIMIZED_PREFIX = 'optimized/';
const TMP_DIR = path.join(os.tmpdir(), 'knbl-optimize');

const IMAGE_EXTENSIONS = new Set(['.jpg', '.jpeg', '.png']);
const VIDEO_EXTENSIONS = new Set(['.mp4', '.mov']);

const WEBP_QUALITY = 80;
const MAX_IMAGE_WIDTH = 1920;

const VIDEO_CRF = 33;
const VIDEO_MAX_HEIGHT = 1080;

// ─── GCS Client ───────────────────────────────────────────────────────────────

function createStorageClient() {
  const privateKey = process.env.GOOGLE_CLOUD_PRIVATE_KEY;
  if (!privateKey || !process.env.GOOGLE_CLOUD_CLIENT_EMAIL || !process.env.GOOGLE_CLOUD_PROJECT_ID) {
    throw new Error(
      'Missing GCS credentials. Ensure GOOGLE_CLOUD_PROJECT_ID, GOOGLE_CLOUD_CLIENT_EMAIL, and GOOGLE_CLOUD_PRIVATE_KEY are set in .env'
    );
  }
  return new Storage({
    projectId: process.env.GOOGLE_CLOUD_PROJECT_ID,
    credentials: {
      client_email: process.env.GOOGLE_CLOUD_CLIENT_EMAIL,
      // .env stores multiline key with literal \n — convert to real newlines
      private_key: privateKey.replace(/\\n/g, '\n'),
    },
  });
}

// ─── Utilities ────────────────────────────────────────────────────────────────

function getOptimizedPath(originalGcsPath) {
  const ext = path.extname(originalGcsPath).toLowerCase();
  const withoutExt = originalGcsPath.slice(0, -ext.length);
  const newExt = IMAGE_EXTENSIONS.has(ext) ? '.webp' : '.webm';
  return `${OPTIMIZED_PREFIX}${withoutExt}${newExt}`;
}

// Safe base64 name for temp files (handles Hebrew, spaces, slashes)
function safeTempName(gcsPath) {
  return Buffer.from(gcsPath).toString('base64').replace(/[/=+]/g, '_');
}

async function optimizedVersionExists(storage, optimizedPath) {
  try {
    const [exists] = await storage.bucket(BUCKET_NAME).file(optimizedPath).exists();
    return exists;
  } catch {
    return false;
  }
}

// ─── Image Processing ─────────────────────────────────────────────────────────

async function processImage(storage, object) {
  const gcsPath = object.name;
  const optimizedPath = getOptimizedPath(gcsPath);

  if (await optimizedVersionExists(storage, optimizedPath)) {
    console.log(`  [SKIP] ${gcsPath}`);
    return 'skipped';
  }

  const base = safeTempName(gcsPath);
  const tmpInput = path.join(TMP_DIR, `${base}_in${path.extname(gcsPath)}`);
  const tmpOutput = path.join(TMP_DIR, `${base}_out.webp`);

  try {
    process.stdout.write(`  [IMG ] Downloading: ${gcsPath} ... `);
    await storage.bucket(BUCKET_NAME).file(gcsPath).download({ destination: tmpInput });
    console.log('done');

    process.stdout.write(`  [IMG ] Converting to WebP ... `);
    await sharp(tmpInput)
      .resize({ width: MAX_IMAGE_WIDTH, withoutEnlargement: true })
      .webp({ quality: WEBP_QUALITY })
      .toFile(tmpOutput);
    console.log('done');

    process.stdout.write(`  [IMG ] Uploading: ${optimizedPath} ... `);
    await storage.bucket(BUCKET_NAME).upload(tmpOutput, {
      destination: optimizedPath,
      metadata: { contentType: 'image/webp' },
    });
    console.log('done');

    return 'success';
  } finally {
    await fs.unlink(tmpInput).catch(() => {});
    await fs.unlink(tmpOutput).catch(() => {});
  }
}

// ─── Video Processing ─────────────────────────────────────────────────────────

async function processVideo(storage, object) {
  const gcsPath = object.name;
  const optimizedPath = getOptimizedPath(gcsPath);

  if (await optimizedVersionExists(storage, optimizedPath)) {
    console.log(`  [SKIP] ${gcsPath}`);
    return 'skipped';
  }

  const base = safeTempName(gcsPath);
  const tmpInput = path.join(TMP_DIR, `${base}_in${path.extname(gcsPath)}`);
  const tmpOutput = path.join(TMP_DIR, `${base}_out.webm`);

  try {
    process.stdout.write(`  [VID ] Downloading: ${gcsPath} ... `);
    await storage.bucket(BUCKET_NAME).file(gcsPath).download({ destination: tmpInput });
    console.log('done');

    console.log(`  [VID ] Converting to WebM/VP9 (this takes a while) ...`);
    await new Promise((resolve, reject) => {
      ffmpeg(tmpInput)
        .videoCodec('libvpx-vp9')
        .audioCodec('libopus')
        .outputOptions([
          `-crf ${VIDEO_CRF}`,
          '-b:v 0',                                           // VP9 constant quality mode
          `-vf scale=-2:'min(${VIDEO_MAX_HEIGHT},ih)'`,       // Max 1080p, preserve AR
          '-deadline good',
          '-cpu-used 2',
          '-auto-alt-ref 1',
          '-lag-in-frames 25',
          '-tile-columns 2',
          '-frame-parallel 1',
        ])
        .on('progress', (p) => {
          if (p.percent != null) {
            process.stdout.write(`\r  [VID ] Progress: ${Math.round(p.percent)}%   `);
          }
        })
        .on('end', () => {
          process.stdout.write('\r  [VID ] Conversion done.          \n');
          resolve();
        })
        .on('error', (err) => {
          process.stdout.write('\n');
          reject(new Error(`FFmpeg failed on "${gcsPath}": ${err.message}`));
        })
        .save(tmpOutput);
    });

    process.stdout.write(`  [VID ] Uploading: ${optimizedPath} ... `);
    await storage.bucket(BUCKET_NAME).upload(tmpOutput, {
      destination: optimizedPath,
      metadata: { contentType: 'video/webm' },
    });
    console.log('done');

    return 'success';
  } finally {
    await fs.unlink(tmpInput).catch(() => {});
    await fs.unlink(tmpOutput).catch(() => {});
  }
}

// ─── Main ─────────────────────────────────────────────────────────────────────

async function main() {
  console.log('=== GCS Media Optimization Pipeline ===');
  console.log(`Bucket: ${BUCKET_NAME}  →  optimized prefix: ${OPTIMIZED_PREFIX}\n`);

  await fs.mkdir(TMP_DIR, { recursive: true });

  const storage = createStorageClient();

  console.log('Listing bucket objects...');
  const [files] = await storage.bucket(BUCKET_NAME).getFiles();

  const images = [];
  const videos = [];

  for (const file of files) {
    const name = file.name;
    if (name.startsWith(OPTIMIZED_PREFIX)) continue;  // already optimized
    if (name.endsWith('/')) continue;                   // directory placeholder

    const ext = path.extname(name).toLowerCase();
    if (IMAGE_EXTENSIONS.has(ext)) images.push(file);
    else if (VIDEO_EXTENSIONS.has(ext)) videos.push(file);
  }

  console.log(`Found ${images.length} image(s) and ${videos.length} video(s) to process.\n`);

  const results = { success: 0, skipped: 0, failed: 0, errors: [] };

  // ── Images ──
  if (images.length > 0) {
    console.log('─── Images ─────────────────────────────────────────────');
    for (const file of images) {
      try {
        const r = await processImage(storage, file);
        if (r === 'skipped') results.skipped++;
        else results.success++;
      } catch (err) {
        results.failed++;
        results.errors.push({ file: file.name, error: err.message });
        console.error(`  [ERR ] ${file.name}: ${err.message}`);
      }
    }
  }

  // ── Videos ──
  if (videos.length > 0) {
    console.log('\n─── Videos ─────────────────────────────────────────────');
    for (const file of videos) {
      try {
        const r = await processVideo(storage, file);
        if (r === 'skipped') results.skipped++;
        else results.success++;
      } catch (err) {
        results.failed++;
        results.errors.push({ file: file.name, error: err.message });
        console.error(`  [ERR ] ${file.name}: ${err.message}`);
      }
    }
  }

  // ── Summary ──
  console.log('\n=== Summary ═══════════════════════════════════════════════');
  console.log(`  Succeeded : ${results.success}`);
  console.log(`  Skipped   : ${results.skipped}  (optimized version already exists)`);
  console.log(`  Failed    : ${results.failed}`);
  if (results.errors.length) {
    console.log('\n  Failed files:');
    results.errors.forEach((e) => console.log(`    - ${e.file}\n      ${e.error}`));
  }

  // Temp dir cleanup
  await fs.rm(TMP_DIR, { recursive: true, force: true }).catch(() => {});
}

main().catch((err) => {
  console.error('\nFatal error:', err.message);
  process.exit(1);
});
