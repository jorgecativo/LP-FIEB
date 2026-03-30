const { Jimp } = require('jimp');

async function run() {
    try {
        const image = await Jimp.read('C:\\Users\\jorge\\.gemini\\antigravity\\brain\\0eaa975c-8f3c-4ca2-b487-0c3732a2dc90\\media__1774903571176.jpg');
        
        const data = image.bitmap.data;
        
        // Removing white background pixel by pixel directly on the buffer
        for (let i = 0; i < data.length; i += 4) {
            const r = data[i];
            const g = data[i + 1];
            const b = data[i + 2];
            
            // Threshold 240 (whiteness)
            if (r > 240 && g > 240 && b > 240) {
                data[i + 3] = 0; // Alpha 0
            }
        }
        
        await image.write('d:\\LLMS LOCAIS\\Antigravity\\PROJETOS\\LP-FIEB\\public\\assets\\mascote.png');
        console.log('DONE-CLEAN-PROFESSIONAL');
    } catch (e) {
        console.error('Processing error:', e);
    }
}

run();
