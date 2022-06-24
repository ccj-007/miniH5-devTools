import resolve from '@rollup/plugin-node-resolve'
import commonjs from "@rollup/plugin-commonjs";
import babel from 'rollup-plugin-babel'
import { terser } from "rollup-plugin-terser";
import postcss from "rollup-plugin-postcss";
import alias from '@rollup/plugin-alias'
import svg from 'rollup-plugin-svg';
import { visualizer } from "rollup-plugin-visualizer";
const path = require('path')
const resolveDir = dir => path.join(__dirname, dir)

export default {
  input: 'src/main.js',
  output: {
    file: 'dist/bundle.build.js',
    format: 'umd',
    name: 'envTools'
  },
  plugins: [
    svg(),
    resolve(),
    commonjs(),
    babel({
      exclude: 'node_modules/**'
    }),
    postcss(),
    alias({
      entries: [{
        find: '@', replacement: resolveDir('src/modules')
      }]
    }),
    terser(),
    visualizer(),
  ]
}