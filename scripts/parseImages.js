let fs = require('fs-extra');
let path = require('path');
let jimp = require('jimp');

async function main() {
  let guideDir = path.resolve('./src/guide');
  let staticDir = path.resolve('./static');

  let images = await fs.readdir(guideDir);
  console.log(images);

/*

  Promise.all(

  )

  Jimp.read('lenna.png')
    .then(lenna => {
      return lenna
        .scale(0.5)
        .quality(60)
        .write('lena-small-bw.jpg'); // save
    })
    .catch(err => {
      console.error(err);
    });
*/
}

main();
