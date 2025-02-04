const sharp = require('sharp');
const fs = require('fs').promises;
const path = require('path');

async function optimizeImage(inputPath) {
  const ext = path.extname(inputPath).toLowerCase();
  const outputPath = inputPath; // Overwrite original

  try {
    if (['.jpg', '.jpeg'].includes(ext)) {
      await sharp(inputPath)
        .jpeg({ quality: 80, progressive: true })
        .toFile(outputPath + '.tmp');
    } else if (ext === '.png') {
      await sharp(inputPath)
        .png({ quality: 80, progressive: true })
        .toFile(outputPath + '.tmp');
    } else if (ext === '.webp') {
      await sharp(inputPath)
        .webp({ quality: 80 })
        .toFile(outputPath + '.tmp');
    } else {
      console.log(`Skipping unsupported format: ${inputPath}`);
      return;
    }

    // Replace original with optimized version
    await fs.unlink(inputPath);
    await fs.rename(outputPath + '.tmp', outputPath);
    console.log(`Optimized: ${inputPath}`);
  } catch (error) {
    console.error(`Error optimizing ${inputPath}:`, error);
  }
}

async function processDirectory(directory) {
  const entries = await fs.readdir(directory, { withFileTypes: true });

  for (const entry of entries) {
    const fullPath = path.join(directory, entry.name);
    
    if (entry.isDirectory()) {
      await processDirectory(fullPath);
    } else if (entry.isFile()) {
      const ext = path.extname(entry.name).toLowerCase();
      if (['.jpg', '.jpeg', '.png', '.webp'].includes(ext)) {
        await optimizeImage(fullPath);
      }
    }
  }
}

// Start optimization from public directory
processDirectory(path.join(process.cwd(), 'public'))
  .then(() => console.log('Image optimization complete'))
  .catch(console.error); 