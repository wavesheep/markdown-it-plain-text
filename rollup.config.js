import path from 'path'
import { name } from './package.json';
import json from '@rollup/plugin-json';
import commonjs from '@rollup/plugin-commonjs';
import { terser } from 'rollup-plugin-terser';

const isDev = process.env.NODE_ENV !== 'production';

export default {
  input: 'index.js',
  output: {
    file: !isDev ? path.resolve(`dist/${name}.min.js`) : path.resolve(`dist/${name}.js`),
    format: 'iife',
    name: 'markdownItPlainTextPlugin'
  },
  plugins: [
    json(),
    commonjs(),
    !isDev && terser()
  ]
}



