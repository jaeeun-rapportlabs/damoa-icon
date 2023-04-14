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

  const initialTypeDefinitions = `
  interface PngImages {
    '@1x': string
    '@2x': string
    '@3x': string
  }
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
  /* 1. react-native에서 쓰는 방식
    const exportString = `export const ${name} = require('./png/${name}/${name}.png');\r\n`;
    const exportTypeString = `const ${name}: number;\nexport { ${name} };\r\n`;
  */

  /* 2. svg export 방식
    const exportString = `import ${name}_svg from './svg/${name}.svg'\nexport const ${name} = ${name}_svg;\r\n`;
    const exportTypeString = `export const ${name}: string;\n`;
  */

  /* 3. png (+ @2x, @3x) export 방식 */
  const exportString = `
    import ${name}_png from './png/${name}/${name}.png'\n
    import ${name}_2x_png from './png/${name}/${name}@2x.png'\n
    import ${name}_3x_png from './png/${name}/${name}@3x.png'\n

    export const ${name} = {
      '@1x': ${name}_png,
      '@2x': ${name}_2x_png,
      '@3x': ${name}_3x_png,
    }
  `;
  const exportTypeString = `export const ${name}: PngImages;\n`;

  fs.appendFileSync(
    path.join(rootDir, 'src', 'icons.js'),
    exportString,
    'utf-8',
  );

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
