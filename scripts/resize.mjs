import sharp from 'sharp';
import * as fs from 'fs';

const directory = './src/assets/images';

fs.readdirSync(directory).forEach(async (file) => {
  try {
    const image = sharp(`${directory}/${file}`);
    const name = file.split('.')[0];
    const { format } = await image.metadata();

    if (
      !name.includes('small') &&
      !name.includes('medium') &&
      !name.includes('large') &&
      (format === 'png' || format === 'webp')
    ) {
      image
        .resize(380)
        .toFile(`${directory}/${name}-xs.${format}`)
      image
        .resize(450)
        .toFile(`${directory}/${name}-sm.${format}`)
      image
        .resize(750)
        .toFile(`${directory}/${name}-md.${format}`)
      image
        .resize(1200)
        .toFile(`${directory}/${name}-lg.${format}`)
      image
        .resize(1800)
        .toFile(`${directory}/${name}-xl.${format}`)
    }
  } catch (error) {
    console.log(error, file);
  }
})
