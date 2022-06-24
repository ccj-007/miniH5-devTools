/**
 * @description 开发环境rollup 打包
 */
import resolve from '@rollup/plugin-node-resolve'
import commonjs from "@rollup/plugin-commonjs";
import babel from 'rollup-plugin-babel'
import postcss from "rollup-plugin-postcss";
import serve from 'rollup-plugin-serve'
import livereload from 'rollup-plugin-livereload'
import alias from '@rollup/plugin-alias'
import svg from 'rollup-plugin-svg';

const path = require('path')
const resolveDir = dir => path.join(__dirname, dir)

export default {
  input: 'src/main.js',
  output: {
    file: 'dist/bundle.dev.js',
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
    livereload(),
    serve({
      open: true,
      port: 8888,
      contentBase: '',
      headers: {
        'Access-Control-Allow-Origin': '*',
      },
    })
  ]
}