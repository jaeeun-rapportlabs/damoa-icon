/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable prefer-template */
const path = require('path')
const fs = require('fs')
const icons = require('../src/data.json')

const rootDir = path.join(__dirname, '..')

// where icons code in
const srcDir = path.join(rootDir, 'src')
const iconsDir = path.join(rootDir, 'src/icons')

// generate icons.js and icons.d.ts file
const generateIconsIndex = () => {
  if (!fs.existsSync(srcDir)) {
    fs.mkdirSync(srcDir)
    fs.mkdirSync(iconsDir)
  } else if (!fs.existsSync(iconsDir)) {
    fs.mkdirSync(iconsDir)
  }

  const initialTypeDefinitions = `/// <reference types="react" />
  `;

  fs.writeFileSync(path.join(rootDir, 'src', 'icons.js'), '', 'utf-8');
  fs.writeFileSync(
    path.join(rootDir, 'src', 'icons.d.ts'),
    initialTypeDefinitions,
    'utf-8',
  );
}

// append export code to icons.js
const appendToIconsIndex = ({ name }) => {
  const exportString = `import ${name}_png from './png/${name}/${name}.png';
  import ${name}_2x_png from './png/${name}/${name}@2x.png';
  import ${name}_3x_png from './png/${name}/${name}@3x.png';
  export const ${name} = ${name}_png;
  export const ${name}_2x = ${name}_2x_png;
  export const ${name}_3x = ${name}_3x_png;\r\n
  `;
  fs.appendFileSync(
    path.join(rootDir, 'src', 'icons.js'),
    exportString,
    'utf-8',
  );

  const exportTypeString = `export const ${name}: string;\n
  export const ${name}_2x: string;
  export const ${name}_3x: string;
  `;
  fs.appendFileSync(
    path.join(rootDir, 'src', 'icons.d.ts'),
    exportTypeString,
    'utf-8',
  );
}

generateIconsIndex()

Object
  .keys(icons)
  .map(key => icons[key])
  .forEach(({name}) => {
    appendToIconsIndex({ name })
  })
