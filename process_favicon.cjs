const Jimp = require('jimp');

async function processImage() {
  console.log('Fetching image...');
  // Pega a imagem redondinha original
  const image = await Jimp.read('https://i.pinimg.com/736x/d7/ed/3a/d7ed3a030880d44e60effc3245c875c4.jpg');
  
  // Redimensionamos para 512x512 SEM COLOCAR CROP (FOI O CROP QUE DEFORMOU)
  image.resize(512, 512);

  // Remover apenas o fundo branco extremo
  image.scan(0, 0, image.bitmap.width, image.bitmap.height, function (x, y, idx) {
    const red = this.bitmap.data[idx + 0];
    const green = this.bitmap.data[idx + 1];
    const blue = this.bitmap.data[idx + 2];
    
    // Se for um pixel branco (maior que 240), deixa transparente
    if (red > 240 && green > 240 && blue > 240) {
      this.bitmap.data[idx + 3] = 0; // Canal alpha (0 = invisível)
    }
  });

  await image.writeAsync('public/assets/favicon.png');
  console.log('Favicon 512x512 corrigido, sem deformação e sem fundo!');
}

processImage().catch(console.error);
