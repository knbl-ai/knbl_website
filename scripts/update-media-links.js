'use strict';

const fs = require('fs').promises;
const path = require('path');

// ─── Configuration ────────────────────────────────────────────────────────────

const PROJECT_ROOT = path.resolve(__dirname, '..');
const SKIP_DIRS = new Set(['node_modules', '.next', '.git', 'scripts']);

// Matches a full GCS URL for the knbl_website bucket.
// Captures everything after "knbl_website/" up to a quote, backtick, or whitespace.
const GCS_URL_REGEX = /https:\/\/storage\.googleapis\.com\/knbl_website\/((?:[^"'`\s])+)/g;

const IMAGE_EXT_RE = /\.(jpg|jpeg|png)$/i;
const VIDEO_EXT_RE = /\.(mp4|mov)$/i;

// ─── URL Transformation ───────────────────────────────────────────────────────

/**
 * Given the path segment after "knbl_website/", compute the optimized replacement.
 * Works on URL-encoded strings as-is (no decoding needed for the transformation).
 */
function computeNewObjectPath(objectPath) {
  // Strip trailing URL fragment or query string that shouldn't be there, just in case
  const [cleanPath] = objectPath.split('?');

  if (IMAGE_EXT_RE.test(cleanPath)) {
    return 'optimized/' + cleanPath.replace(IMAGE_EXT_RE, '.webp');
  }
  if (VIDEO_EXT_RE.test(cleanPath)) {
    return 'optimized/' + cleanPath.replace(VIDEO_EXT_RE, '.webm');
  }
  return null; // not a media file — leave untouched
}

/**
 * Find all GCS media URLs in `content` and return an array of {original, replacement} pairs.
 */
function buildReplacements(content) {
  const replacements = [];
  const seen = new Set();

  const regex = new RegExp(GCS_URL_REGEX.source, 'g');
  let match;

  while ((match = regex.exec(content)) !== null) {
    const fullUrl = match[0];
    const objectPath = match[1];

    // Skip already-optimized URLs
    if (objectPath.startsWith('optimized/')) continue;

    // Skip duplicates within the same file pass
    if (seen.has(fullUrl)) continue;
    seen.add(fullUrl);

    const newObjectPath = computeNewObjectPath(objectPath);
    if (!newObjectPath) continue; // not an image or video

    const newUrl = `https://storage.googleapis.com/knbl_website/${newObjectPath}`;
    replacements.push({ original: fullUrl, replacement: newUrl });
  }

  return replacements;
}

// ─── File Processing ──────────────────────────────────────────────────────────

async function processFile(filePath, dryRun) {
  const content = await fs.readFile(filePath, 'utf8');
  const replacements = buildReplacements(content);

  if (replacements.length === 0) return 0;

  // Apply all replacements (split/join handles multiple occurrences cleanly)
  let newContent = content;
  for (const { original, replacement } of replacements) {
    newContent = newContent.split(original).join(replacement);
  }

  const relPath = path.relative(PROJECT_ROOT, filePath);

  if (dryRun) {
    console.log(`\n[DRY RUN] ${relPath} — ${replacements.length} replacement(s):`);
    for (const { original, replacement } of replacements) {
      console.log(`  FROM: ${original}`);
      console.log(`    TO: ${replacement}`);
    }
  } else {
    await fs.writeFile(filePath, newContent, 'utf8');
    console.log(`\n[UPDATED] ${relPath} — ${replacements.length} URL(s) replaced:`);
    for (const { original, replacement } of replacements) {
      console.log(`  ${original}`);
      console.log(`  => ${replacement}`);
    }
  }

  return replacements.length;
}

// ─── File Discovery ───────────────────────────────────────────────────────────

async function collectSourceFiles(dir) {
  const entries = await fs.readdir(dir, { withFileTypes: true });
  const results = [];

  for (const entry of entries) {
    const fullPath = path.join(dir, entry.name);

    if (entry.isDirectory()) {
      if (SKIP_DIRS.has(entry.name)) continue;
      results.push(...(await collectSourceFiles(fullPath)));
    } else if (entry.isFile() && /\.(tsx?|js)$/.test(entry.name)) {
      results.push(fullPath);
    }
  }

  return results;
}

// ─── Main ─────────────────────────────────────────────────────────────────────

async function main() {
  const dryRun = process.argv.includes('--dry-run');

  console.log(`=== Media URL Updater${dryRun ? ' (DRY RUN — no files written)' : ''} ===\n`);

  const files = await collectSourceFiles(PROJECT_ROOT);
  console.log(`Scanning ${files.length} source files for GCS URLs...\n`);

  let totalReplacements = 0;
  let totalFilesChanged = 0;

  for (const file of files) {
    const count = await processFile(file, dryRun);
    if (count > 0) {
      totalReplacements += count;
      totalFilesChanged++;
    }
  }

  console.log('\n=== Summary ═════════════════════════════════════════════');
  console.log(`  Files changed  : ${totalFilesChanged}`);
  console.log(`  URLs replaced  : ${totalReplacements}`);
  if (dryRun) {
    console.log('\n  Run without --dry-run to apply changes.');
  }
}

main().catch((err) => {
  console.error('\nFatal error:', err.message);
  process.exit(1);
});
