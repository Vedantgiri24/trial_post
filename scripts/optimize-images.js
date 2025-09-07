/**
 * Image Optimization Script
 * 
 * This script optimizes images in the assets directory by:
 * 1. Converting to WebP format
 * 2. Resizing to appropriate dimensions
 * 3. Compressing to reduce file size
 * 
 * Usage: 
 * 1. Install dependencies: npm install sharp
 * 2. Run: node scripts/optimize-images.js
 */

const fs = require('fs');
const path = require('path');
const sharp = require('sharp');

// Configuration
const config = {
  inputDir: path.join(__dirname, '../src/assets'),
  outputDir: path.join(__dirname, '../src/assets/optimized'),
  formats: ['webp'],
  quality: 80,
  sizes: [
    { width: 640, height: null, suffix: 'sm' },
    { width: 1024, height: null, suffix: 'md' },
    { width: 1920, height: null, suffix: 'lg' },
  ],
  // Files larger than this size (in KB) will be optimized
  sizeThreshold: 200,
};

// Create output directory if it doesn't exist
if (!fs.existsSync(config.outputDir)) {
  fs.mkdirSync(config.outputDir, { recursive: true });
}

// Get all image files from input directory
const imageFiles = fs.readdirSync(config.inputDir)
  .filter(file => {
    const ext = path.extname(file).toLowerCase();
    return ['.jpg', '.jpeg', '.png'].includes(ext);
  });

console.log(`Found ${imageFiles.length} images to process`);

// Process each image
async function processImages() {
  for (const file of imageFiles) {
    const inputPath = path.join(config.inputDir, file);
    const fileStats = fs.statSync(inputPath);
    const fileSizeKB = fileStats.size / 1024;
    
    // Skip small files that don't need optimization
    if (fileSizeKB < config.sizeThreshold) {
      console.log(`Skipping ${file} (${Math.round(fileSizeKB)}KB) - below threshold`);
      continue;
    }
    
    console.log(`Processing ${file} (${Math.round(fileSizeKB)}KB)`);
    
    const fileName = path.parse(file).name;
    
    // Process each size
    for (const size of config.sizes) {
      // Process each format
      for (const format of config.formats) {
        const outputFileName = `${fileName}-${size.suffix}.${format}`;
        const outputPath = path.join(config.outputDir, outputFileName);
        
        try {
          await sharp(inputPath)
            .resize({
              width: size.width,
              height: size.height,
              fit: 'inside',
              withoutEnlargement: true
            })
            [format]({
              quality: config.quality,
            })
            .toFile(outputPath);
            
          const outputStats = fs.statSync(outputPath);
          const outputSizeKB = outputStats.size / 1024;
          const savings = Math.round((1 - outputSizeKB / fileSizeKB) * 100);
          
          console.log(`  Created ${outputFileName} (${Math.round(outputSizeKB)}KB, ${savings}% smaller)`);
        } catch (err) {
          console.error(`  Error processing ${file} to ${outputFileName}:`, err);
        }
      }
    }
  }
}

processImages()
  .then(() => console.log('Image optimization complete!'))
  .catch(err => console.error('Error optimizing images:', err));