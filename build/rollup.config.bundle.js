import babel from '@rollup/plugin-babel';
import { join, resolve } from 'path';
import copy from 'rollup-plugin-copy';
import pkg from '../package.json';
import url from '@rollup/plugin-url'

const resolveFile = function(filePath) {
  return join(__dirname, '..', filePath)
}

export default {
  input: 'src/icons.js',
  output: [
    { file: pkg.main, format: 'cjs' },
    { file: pkg.module, format: 'es' }
  ],
  external: ['react', 'prop-types'],
  plugins: [
    url(),
    copy({
      targets: [
        { src: resolveFile('src/icons.d.ts'), dest: resolveFile('dist/') },
        // { src: resolve('src/svg/*'), dest: resolve('dist/svg/') }, // copy SVG files
        // { src: resolve('src/png/**'), dest: resolve('dist/png/') } // copy PNG files
      ]
    }),
    babel({
      exclude: 'node_modules/**',
    }),
  ],
};
