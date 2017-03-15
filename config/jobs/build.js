import { DefinePlugin, LoaderOptionsPlugin } from 'webpack';
import ExtractTextPlugin from 'extract-text-webpack-plugin';

import { PATHS } from '../core/setup';

export default {
  module: {
    rules: [
      {
        test: /\.css$/,
        include: PATHS.app,
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: 'css-loader'
        })
      }
    ]
  },
  plugins: [
    new DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify('production')
    }),
    new LoaderOptionsPlugin({
      minimize: true,
      debug: false
    }),
    new ExtractTextPlugin('app.css')
  ]
};
