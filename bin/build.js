/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable prefer-template */
const path = require('path')
const fs = require('fs')
const icons = require('../src/data.json')

const rootDir = path.join(__dirname, '..')

// where icons code in
const srcDir = path.join(rootDir, 'src')

// generate icons.js and icons.d.ts file
const generateIconsIndex = () => {
  if (!fs.existsSync(srcDir)) {
    fs.mkdirSync(srcDir)
  }

  const initialTypeDefinitions = ``;

  fs.writeFileSync(path.join(rootDir, 'src', 'icons.js'), '', 'utf-8');
  fs.writeFileSync(
    path.join(rootDir, 'src', 'icons.d.ts'),
    initialTypeDefinitions,
    'utf-8',
  );
}

// append export code to icons.js
const appendToIconsIndex = ({ name }) => {
  // const exportString = `export const ${name} = require('./png/${name}/${name}.png');\r\n`;
  const exportString = `
  import ${name}_svg from './svg/${name}.svg'
  export const ${name} = ${name}_svg;\r\n
  `;

  fs.appendFileSync(
    path.join(rootDir, 'src', 'icons.js'),
    exportString,
    'utf-8',
  );

  // const exportTypeString = `const ${name}: number;
  // export { ${name} };\n
  // `;
  const exportTypeString = `export const ${name}: string;\n`;

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
