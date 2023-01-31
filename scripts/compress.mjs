import imagemin from "imagemin";
import pngquant from "imagemin-pngquant";
import webp from "imagemin-webp";

const directory = "./src/assets/images/*.{webp,png}";

(async () => {
  const files = await imagemin([directory], {
    destination: "./src/assets/images/",
    plugins: [pngquant({ quality: [0.75, 0.75] }), webp({ quality: 75 })],
  });

  console.log(files);
})();
