/*
 * Webpack 2 config
 */
'use strict';
require('babel-register');

// dependencies
import path from 'path';
import merge from 'webpack-merge';
// import validate from 'webpack-validator';  // validate fails on webpack 2.2

// Settings
import base, { build, local } from './config';

// Environment
let webpackConfig;
const TARGET = process.env.npm_lifecycle_event;
process.env.BABEL_ENV = TARGET; // for .babelrc config

switch (TARGET) {
  case 'build':
    webpackConfig = merge(base, build);
    break;

  default:
    webpackConfig = merge(base, local);
}

export default webpackConfig;
// export default validate(webpackConfig);
