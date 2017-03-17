import webpack from 'webpack';
import HtmlWebpackPlugin from 'html-webpack-plugin';

import packageJson from '../../package.json';
import { PATHS } from './setup';

export default [
  new HtmlWebpackPlugin({
    title: packageJson.description,
    template: `${PATHS.app}/index.ejs`
  }),
  new webpack.optimize.CommonsChunkPlugin({
    name: 'vendor',
    minChunks: Infinity,
    filename: 'vendor.bundle.js',
  })
];
