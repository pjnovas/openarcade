import fs from 'fs';

import {steps} from './steps.yaml'

export default {
  steps,
  content: {
    intro: {
      es: fs.readFileSync(__dirname + '/intro.es.md', 'utf8'),
      en: fs.readFileSync(__dirname + '/intro.en.md', 'utf8')
    },
    modes: {
      es: fs.readFileSync(__dirname + '/modes.es.md', 'utf8'),
      en: fs.readFileSync(__dirname + '/modes.en.md', 'utf8')
    },
    box: {
      es: fs.readFileSync(__dirname + '/box/es.md', 'utf8'),
      en: fs.readFileSync(__dirname + '/box/en.md', 'utf8')
    },
    panel: {
      es: fs.readFileSync(__dirname + '/panel/es.md', 'utf8'),
      en: fs.readFileSync(__dirname + '/panel/en.md', 'utf8')
    },
    electronics: {
      es: fs.readFileSync(__dirname + '/electronics/es.md', 'utf8'),
      en: fs.readFileSync(__dirname + '/electronics/en.md', 'utf8')
    },
    back: {
      es: fs.readFileSync(__dirname + '/back/es.md', 'utf8'),
      en: fs.readFileSync(__dirname + '/back/en.md', 'utf8')
    },
    left: {
      es: fs.readFileSync(__dirname + '/left/es.md', 'utf8'),
      en: fs.readFileSync(__dirname + '/left/en.md', 'utf8')
    },
    right: {
      es: fs.readFileSync(__dirname + '/right/es.md', 'utf8'),
      en: fs.readFileSync(__dirname + '/right/en.md', 'utf8')
    },
    front: {
      es: fs.readFileSync(__dirname + '/front/es.md', 'utf8'),
      en: fs.readFileSync(__dirname + '/front/en.md', 'utf8')
    }
  }
}
