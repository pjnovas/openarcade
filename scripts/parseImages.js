let fs = require('fs-extra');
let path = require('path');
let jimp = require('jimp');
let flatten = require('lodash/flatten');

let logPer = total => curr => console.log(`Processing ${curr}/${total}`);

async function main() {
  // TODO: move this props into params
  const guideDir = path.resolve('./src/guide');
  const staticDir = path.resolve('./static/guide');
  const scale = 0.5;
  const quality = 40;

  // -----------

  let files = await fs.readdir(guideDir);
  let dirs = files.filter(filename => !filename.includes('.'));

  let images = await Promise.all(
    dirs.map(dir => fs.readdir(`${guideDir}/${dir}`))
  )
  .then(result => dirs.reduce((all, dir, i) => Object.assign(all, {
    [dir]: result[i].filter(filename => (/\.(jpe?g|png)$/i).test(filename))
  }), {}));

  let log = logPer(flatten(Object.keys(images).map(dir => images[dir])).length);
  let curr = 0;

  console.time('process');
  log(curr);

  Promise.all(flatten(
    Object.keys(images).map(dir =>
      images[dir].map(img =>
        jimp
          .read(`${guideDir}/${dir}/${img}`)
          .then(image => image
            .scale(scale)
            .quality(quality)
            .writeAsync(`${staticDir}/${dir}/${img}`)
            .then(data => {
              log(++curr);
              return data;
            })
          )
      )
    )
  )).then(result => {
    console.log(`ALL DONE ${result.length}`)
  })
  .catch(e => {
    console.log(e)
  })
  .then(() => {
    console.timeEnd('process');
  })
}

main();
