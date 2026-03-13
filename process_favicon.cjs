const Jimp = require('jimp');

async function processImage() {
  console.log('Fetching image...');
  // O usuário pediu essa nova imagem:
  const image = await Jimp.read('https://i.pinimg.com/736x/d7/ed/3a/d7ed3a030880d44e60effc3245c875c4.jpg');
  
  // Cortar o excesso de borda branca que já vem na imagem (isso fará o ícone parecer bem maior na aba)
  // crop(x, y, width, height)
  image.crop(100, 100, 536 - 150, 536 - 150); // Valores ajustáveis de crop para tentar enquadrar bem o "globo"
  
  // Agora sim redimensionamos para os 512x512 exigidos
  image.resize(512, 512);

  // Remover fundo branco ou quase branco
  image.scan(0, 0, image.bitmap.width, image.bitmap.height, function (x, y, idx) {
    const red = this.bitmap.data[idx + 0];
    const green = this.bitmap.data[idx + 1];
    const blue = this.bitmap.data[idx + 2];
    
    // Deixa transparente (alpha = 0) qualquer pixel muito claro (fundo branco)
    if (red > 230 && green > 230 && blue > 230) {
      this.bitmap.data[idx + 3] = 0;
    }
  });

  await image.writeAsync('public/assets/favicon.png');
  console.log('Favicon 512x512 saved successfully to public/assets/favicon.png');
}

processImage().catch(console.error);
