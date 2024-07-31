import fs from 'fs';
import path from 'path';
import sharp from 'sharp';
import imagemin from 'imagemin';
import imageminMozjpeg from 'imagemin-mozjpeg';
import imageminPngquant from 'imagemin-pngquant';

const optimizeImages = async () => {
    // Define input and output directories
    const inputDir = path.join(process.cwd(), 'public', 'photos', 'images');
    const outputDir = path.join(process.cwd(), 'public', 'photos', 'imagesOptimized');

    // Read all files in the input directory
    const files = fs.readdirSync(inputDir);

    // Loop through each file
    for (const file of files) {
        const inputFilePath = path.join(inputDir, file);
        const outputFilePath = path.join(outputDir, file);

        // Resize the image using Sharp and get the buffer
        const buffer = await sharp(inputFilePath)
            .resize({ width: 800 })
            .rotate()
            .toBuffer();

        // Optimize the resized image buffer using Imagemin
        const optimizedBuffer = await imagemin.buffer(buffer, {
            plugins: [
                imageminMozjpeg({ quality: 75 }),
                imageminPngquant({ quality: [0.6, 0.8] })
            ]
        });

        // Write the optimized buffer to the output file
        fs.writeFileSync(outputFilePath, optimizedBuffer);
    }
};

/**
 * Creates templates for a new module
 */
(function main() {
    optimizeImages();
})();
