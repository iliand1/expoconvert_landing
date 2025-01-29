import sharp from 'sharp';
import fs from 'fs';
import path from 'path';

async function verifyImage(buffer, label) {
  const metadata = await sharp(buffer).metadata();
  console.log(`${label} dimensions:`, {
    width: metadata.width,
    height: metadata.height,
    format: metadata.format,
    space: metadata.space,
    channels: metadata.channels
  });
}

async function testResize() {
  try {
    // Read the source images
    const sourceImagePath = path.join(process.cwd(), 'public/test-images/your-image.jpg');
    const targetImagePath = path.join(process.cwd(), 'public/test-images/target-hair.jpg');

    console.log('Testing source image:', sourceImagePath);
    console.log('Testing target image:', targetImagePath);

    // Test source image
    const sourceBuffer = fs.readFileSync(sourceImagePath);
    console.log('\n=== Source Image ===');
    await verifyImage(sourceBuffer, 'Original source');

    // Resize source image
    const resizedSourceBuffer = await sharp(sourceBuffer)
      .resize(600, 600, {
        fit: 'cover',
        position: 'center'
      })
      .jpeg({
        quality: 100
      })
      .toBuffer();

    await verifyImage(resizedSourceBuffer, 'Resized source');

    // Convert to base64 and back to verify no changes
    const sourceBase64 = resizedSourceBuffer.toString('base64');
    const sourceDataUrl = `data:image/jpeg;base64,${sourceBase64}`;
    
    // Test by converting back from base64
    const sourceBufferFromBase64 = Buffer.from(sourceBase64, 'base64');
    await verifyImage(sourceBufferFromBase64, 'Source after base64 conversion');

    // Test target image
    const targetBuffer = fs.readFileSync(targetImagePath);
    console.log('\n=== Target Image ===');
    await verifyImage(targetBuffer, 'Original target');

    // Resize target image
    const resizedTargetBuffer = await sharp(targetBuffer)
      .resize(600, 600, {
        fit: 'cover',
        position: 'center'
      })
      .jpeg({
        quality: 100
      })
      .toBuffer();

    await verifyImage(resizedTargetBuffer, 'Resized target');

    // Convert to base64 and back to verify no changes
    const targetBase64 = resizedTargetBuffer.toString('base64');
    const targetDataUrl = `data:image/jpeg;base64,${targetBase64}`;
    
    // Test by converting back from base64
    const targetBufferFromBase64 = Buffer.from(targetBase64, 'base64');
    await verifyImage(targetBufferFromBase64, 'Target after base64 conversion');

    // Save all versions for inspection
    const resultsDir = path.join(process.cwd(), 'public/test-images/resize-test');
    if (!fs.existsSync(resultsDir)) {
      fs.mkdirSync(resultsDir, { recursive: true });
    }

    // Save original, resized, and base64-converted versions
    await sharp(sourceBuffer).toFile(path.join(resultsDir, 'source-original.jpg'));
    await sharp(resizedSourceBuffer).toFile(path.join(resultsDir, 'source-resized.jpg'));
    await sharp(sourceBufferFromBase64).toFile(path.join(resultsDir, 'source-after-base64.jpg'));
    
    await sharp(targetBuffer).toFile(path.join(resultsDir, 'target-original.jpg'));
    await sharp(resizedTargetBuffer).toFile(path.join(resultsDir, 'target-resized.jpg'));
    await sharp(targetBufferFromBase64).toFile(path.join(resultsDir, 'target-after-base64.jpg'));

    console.log('\nAll test images saved to:', resultsDir);
    console.log('Please check all versions of the images to verify the process');

    // Save the exact data URLs we would send to the API
    fs.writeFileSync(path.join(resultsDir, 'source-dataurl.txt'), sourceDataUrl);
    fs.writeFileSync(path.join(resultsDir, 'target-dataurl.txt'), targetDataUrl);

  } catch (error) {
    console.error('Test failed:', error);
  }
}

testResize().catch(console.error); 