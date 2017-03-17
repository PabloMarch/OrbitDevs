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
import config, { build, local } from './config';

// Environment
let webpackConfig;
const TARGET = process.env.npm_lifecycle_event;
// for .babelrc config
process.env.BABEL_ENV = TARGET;

// Temporal solution to warnings, please remove when issue is resolved https://github.com/webpack/loader-utils/issues/56
process.noDeprecation = true;

switch (TARGET) {
  case 'build':
    webpackConfig = merge(config, build);
    break;

  default:
    webpackConfig = merge(config, local);
}

export default webpackConfig;
// export default validate(webpackConfig);
