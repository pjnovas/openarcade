const fs = require('fs-extra');
const path = require('path');
const jimp = require('jimp');
const flatten = require('lodash/flatten');

const logPer = total => curr => console.log(`Processing ${curr}/${total}`);

const resolveExt = (ext, dirs, path) => Promise.all(
    dirs.map(dir => fs.readdir(`${path}/${dir}`))
  )
  .then(result => dirs.reduce((all, dir, i) => Object.assign(all, {
    [dir]: result[i].filter(filename => ext.test(filename))
  }), {}));

async function main() {
  // TODO: move this props into params
  const guideDir = path.resolve('./src/guide');
  const staticDir = path.resolve('./static/guide');
  const scale = 0.5;
  const quality = 40;

  // -----------

  let files = await fs.readdir(guideDir);
  let dirs = files.filter(filename => !filename.includes('.'));

  let images = await resolveExt(/\.(jpe?g|png)$/i, dirs, guideDir);
  let docs = await resolveExt(/\.pdf$/i, dirs, guideDir);

  let log = logPer(flatten([
    ...Object.keys(images).map(dir => images[dir]),
    ...Object.keys(docs).map(dir => docs[dir])
  ]).length);

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
    ),
    Object.keys(docs).map(dir =>
      docs[dir].map(doc => fs.copy(
        `${guideDir}/${dir}/${doc}`,
        `${staticDir}/${dir}/${doc}`,
        {overwrite: true}
      ).then(data => {
        log(++curr);
        return data;
      }))
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
