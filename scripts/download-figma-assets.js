const fs = require('fs').promises;
const path = require('path');
const https = require('https');
const sharp = require('sharp');

// All Figma image URLs extracted from design context
// These URLs are valid for 7 days from generation
const imageUrls = {
  hero: {
    'floating-badge-1': 'https://www.figma.com/api/mcp/asset/5dd4bdc5-ec9e-4581-bf68-0940f6d27e3c',
    'floating-badge-2': 'https://www.figma.com/api/mcp/asset/5a4f7eb5-c2b4-4716-ae73-0a6a273d7c90',
    'floating-badge-3': 'https://www.figma.com/api/mcp/asset/a1b9d087-b334-483a-af15-05c80d372121',
    'blob-1': 'https://www.figma.com/api/mcp/asset/945c5c37-3c40-4532-91fd-769892a87ddb',
    'blob-2': 'https://www.figma.com/api/mcp/asset/57f32120-d0d4-4c63-aac7-c232b948a660',
    'blob-3': 'https://www.figma.com/api/mcp/asset/706ad3ac-21c1-4039-b9d2-8e26917b6bc6',
    'vector-bg': 'https://www.figma.com/api/mcp/asset/b0b37ada-a8c9-499c-a993-3854105edf80',
  },
  services: {
    'strategy-bg': 'https://www.figma.com/api/mcp/asset/a252e161-dfd6-494c-914e-b108807011ee',
    'message-bg': 'https://www.figma.com/api/mcp/asset/4ede1570-2665-46af-9cab-b181686f628c',
    'creative-bg': 'https://www.figma.com/api/mcp/asset/a919d3c0-ee91-4e7d-83ca-532fc2ea3226',
    'data-bg': 'https://www.figma.com/api/mcp/asset/1162b5a1-104c-4fbd-bc98-24b4d4e5fa7e',
  },
  projects: {
    'project-1': 'https://www.figma.com/api/mcp/asset/efbf31a5-4a87-400b-83eb-29ce54c23c5a',
    'project-2': 'https://www.figma.com/api/mcp/asset/8ee890cf-dceb-4bd2-b93c-63011b1da4f4',
    'project-3': 'https://www.figma.com/api/mcp/asset/92cf8c45-a7a0-4c7e-a91e-5b05fc2f5b54',
    'project-4': 'https://www.figma.com/api/mcp/asset/c605ad99-f129-41cc-a3ef-00815b217365',
    'project-5': 'https://www.figma.com/api/mcp/asset/9b5516aa-d1ea-4a31-be44-8279bd75cadf',
    'project-6': 'https://www.figma.com/api/mcp/asset/85767882-0581-4a84-b0fc-ac58a33ea982',
  },
  blog: {
    'blog-ai': 'https://www.figma.com/api/mcp/asset/bd338c11-5942-4901-8609-cc1676586985',
    'blog-data': 'https://www.figma.com/api/mcp/asset/6eb16e26-a31e-4604-abdb-b22a53b19b7c',
    'blog-culture': 'https://www.figma.com/api/mcp/asset/fe1adafd-c279-46ac-b46a-8aa0e94c2a54',
  },
  brands: {
    'brand-logo-1': 'https://www.figma.com/api/mcp/asset/685cd8f8-817d-49b1-98eb-b106e95f5408',
    'brand-logo-2': 'https://www.figma.com/api/mcp/asset/ca87f599-b5f7-48e5-b85c-b26d9ea6b30b',
    'brand-logo-3': 'https://www.figma.com/api/mcp/asset/0fd45f43-ab2d-4597-bfa7-8648c9be006a',
    'brand-logo-4': 'https://www.figma.com/api/mcp/asset/b830daff-dd3a-4245-89e5-489bd530b107',
    'brand-logo-5': 'https://www.figma.com/api/mcp/asset/fedac3ce-2422-4d34-816e-adb97e02810c',
  },
  community: {
    'knbl-masters-video': 'https://www.figma.com/api/mcp/asset/6dbeb0f0-ec5c-42a9-8f26-5d3d473d9d38',
  },
  icons: {
    'compass': 'https://www.figma.com/api/mcp/asset/84838ff6-5f77-4d83-874a-97f3b021a41b',
    'lightbulb': 'https://www.figma.com/api/mcp/asset/bf29eb99-5aa8-43c2-a016-5bda400e994f',
    'simulation': 'https://www.figma.com/api/mcp/asset/f09f719f-55dc-4a78-a570-004905905791',
    'arrow-down': 'https://www.figma.com/api/mcp/asset/ce579d8f-be0f-4b6e-817a-e793d4bb1576',
    'instagram': 'https://www.figma.com/api/mcp/asset/78e2afd4-7678-4f86-994b-f91de078c071',
    'tiktok': 'https://www.figma.com/api/mcp/asset/a151b430-a267-42ec-892f-e64f7d6bfdf3',
    'facebook': 'https://www.figma.com/api/mcp/asset/39d76742-81b0-4e68-b27b-4b4c5fa734e6',
    'linkedin': 'https://www.figma.com/api/mcp/asset/7bff50a9-9fbd-4050-911c-7730d10123c1',
    'youtube': 'https://www.figma.com/api/mcp/asset/0ccb8dd6-1130-461b-be24-c864d65a9c96',
  },
  logo: {
    'knbl-logo': 'https://www.figma.com/api/mcp/asset/97618eeb-a110-4eb8-a737-5669c91d5c06',
    'knbl-footer-graphic': 'https://www.figma.com/api/mcp/asset/8e8b7e31-0c49-4aff-9c15-64c235da6be2',
  },
};

/**
 * Downloads an image from a URL and optionally converts it to WebP
 */
async function downloadAndConvert(url, outputPath, convertToWebP = true) {
  const tempPath = outputPath + '.tmp';
  const dir = path.dirname(outputPath);

  // Create directory if it doesn't exist
  await fs.mkdir(dir, { recursive: true });

  // Download image
  await new Promise((resolve, reject) => {
    https.get(url, (response) => {
      if (response.statusCode === 302 || response.statusCode === 301) {
        // Follow redirect
        https.get(response.headers.location, (redirectResponse) => {
          const fileStream = require('fs').createWriteStream(tempPath);
          redirectResponse.pipe(fileStream);
          fileStream.on('finish', () => {
            fileStream.close();
            resolve();
          });
          fileStream.on('error', reject);
        }).on('error', reject);
      } else if (response.statusCode === 200) {
        const fileStream = require('fs').createWriteStream(tempPath);
        response.pipe(fileStream);
        fileStream.on('finish', () => {
          fileStream.close();
          resolve();
        });
        fileStream.on('error', reject);
      } else {
        reject(new Error(`HTTP ${response.statusCode}: ${response.statusMessage}`));
      }
    }).on('error', reject);
  });

  // Determine if file is SVG based on content
  const buffer = await fs.readFile(tempPath);
  const isSVG = buffer.toString('utf8', 0, 100).includes('<svg');

  // Convert to WebP if requested and not SVG
  if (convertToWebP && !isSVG && !outputPath.endsWith('.svg')) {
    const webpPath = outputPath.replace(/\.(jpg|jpeg|png)$/i, '.webp');
    await sharp(tempPath)
      .webp({ quality: 85 })
      .toFile(webpPath);
    await fs.unlink(tempPath);
    return webpPath;
  } else {
    // If SVG or conversion not requested, just rename
    const finalPath = isSVG ? outputPath.replace(/\.(jpg|jpeg|png|webp)$/i, '.svg') : outputPath;
    await fs.rename(tempPath, finalPath);
    return finalPath;
  }
}

/**
 * Downloads all Figma assets
 */
async function downloadAllAssets() {
  console.log('🚀 Starting download of Figma assets...\n');
  const results = [];
  let successCount = 0;
  let failureCount = 0;

  for (const [category, urls] of Object.entries(imageUrls)) {
    console.log(`\n📁 Processing category: ${category}`);

    for (const [filename, url] of Object.entries(urls)) {
      // Determine extension based on category and filename
      let extension = '.png';
      if (category === 'icons' || category === 'logo' || filename.includes('logo')) {
        extension = '.svg';
      } else if (category === 'services' || category === 'projects' || category === 'blog' || category === 'community') {
        extension = '.jpg';
      }

      const outputPath = path.join('public', 'images', category, filename + extension);

      try {
        const savedPath = await downloadAndConvert(url, outputPath, true);
        results.push({ category, filename, status: 'success', path: savedPath });
        successCount++;
        console.log(`  ✓ Downloaded: ${savedPath}`);
      } catch (error) {
        results.push({ category, filename, status: 'failed', error: error.message });
        failureCount++;
        console.error(`  ✗ Failed: ${filename} - ${error.message}`);
      }
    }
  }

  // Save results to JSON
  await fs.writeFile(
    'asset-manifest.json',
    JSON.stringify(results, null, 2)
  );

  console.log('\n' + '='.repeat(60));
  console.log('📊 Download Summary');
  console.log('='.repeat(60));
  console.log(`✓ Successful: ${successCount}`);
  console.log(`✗ Failed: ${failureCount}`);
  console.log(`📄 Total: ${successCount + failureCount}`);
  console.log('\n✅ Download complete! Check asset-manifest.json for details.');
}

// Run the download
downloadAllAssets().catch(console.error);
