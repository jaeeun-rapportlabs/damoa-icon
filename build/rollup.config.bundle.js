import babel from '@rollup/plugin-babel';
import path from 'path';
import copy from 'rollup-plugin-copy';
import pkg from '../package.json';
const svg = require('rollup-plugin-svg');

const resolveFile = function(filePath) {
  return path.join(__dirname, '..', filePath)
}

export default {
  input: 'src/icons.js',
  output: [
    { file: pkg.main, format: 'cjs' },
    { file: pkg.module, format: 'es' }
  ],
  external: ['react', 'prop-types'],
  plugins: [
    copy({
      targets: [
        { src: resolveFile('src/icons.d.ts'), dest: resolveFile('dist/') },
        { src: path.resolve('src/svg/*'), dest: resolve('dist/svg/') } // copy SVG files
      ]
    }),
    babel({
      exclude: 'node_modules/**',
    }),
    svg(),
  ],
};
