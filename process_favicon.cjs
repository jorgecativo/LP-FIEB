const Jimp = require('jimp');

async function processImage() {
  console.log('Fetching image...');
  const image = await Jimp.read('https://i.pinimg.com/736x/d7/ed/3a/d7ed3a030880d44e60effc3245c875c4.jpg');
  
  // A square favicon size
  image.resize(256, 256);
  
  // Remove white background (make near-white pixels transparent)
  image.scan(0, 0, image.bitmap.width, image.bitmap.height, function (x, y, idx) {
    const red = this.bitmap.data[idx + 0];
    const green = this.bitmap.data[idx + 1];
    const blue = this.bitmap.data[idx + 2];
    
    // If it's a white-ish pixel, make it completely transparent (Alpha = 0)
    if (red > 230 && green > 230 && blue > 230) {
      this.bitmap.data[idx + 3] = 0;
    }
  });

  await image.writeAsync('public/assets/favicon.png');
  console.log('Favicon saved successfully to public/assets/favicon.png');
}

processImage().catch(console.error);
