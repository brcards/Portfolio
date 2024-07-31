import fs from 'fs';
import path from 'path';
import sharp from 'sharp';

export async function GetPhotos() {
    const directoryPath = path.join(process.cwd(), 'public', 'photos/images');
    const files = fs.readdirSync(directoryPath);

    return await Promise.all(files
        .filter((fileName) => /\.(jpg|jpeg|png|gif)$/i.test(fileName))
        .map(async (fileName) => {
            const filePath = path.join(directoryPath, fileName);
            const metadata = await sharp(filePath).metadata();

            let orientation;
            if (metadata.orientation >= 5) {
                // Rotated 90 or 270 degrees
                orientation = metadata.width > metadata.height ? 'portrait' : 'landscape';
            } else {
                // Normal or rotated 180 degrees
                orientation = metadata.width > metadata.height ? 'landscape' : 'portrait';
            }

            return {
                src: "/photos/images/" + fileName,
                thumbnail: "/photos/imagesOptimized/" + fileName,
                width: orientation === 'landscape' ? metadata.width : metadata.height,
                height: orientation === 'landscape' ? metadata.height : metadata.width,
            };
        })
    );
}