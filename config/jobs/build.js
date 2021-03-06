import { DefinePlugin, LoaderOptionsPlugin, optimize } from 'webpack';
import { BundleAnalyzerPlugin } from 'webpack-bundle-analyzer';
import ExtractTextPlugin from 'extract-text-webpack-plugin';

import { PATHS } from '../core/setup';

export default {
  module: {
    rules: [
      {
        test: /\.scss$/,
        exclude: /node_modules/,
        include: PATHS.app,
        use: ExtractTextPlugin.extract({
          use: [
            { loader: 'css-loader' },
            { loader: 'sass-loader' }
          ]
        }),
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
    new optimize.UglifyJsPlugin({
      compress: {
        warnings: false,
        screw_ie8: true,
        conditionals: true,
        unused: true,
        comparisons: true,
        sequences: true,
        dead_code: true,
        evaluate: true,
        if_return: true,
        join_vars: true,
      },
      output: {
        comments: false,
      }
    }),
    new ExtractTextPlugin('app.bundle.css'),
    new BundleAnalyzerPlugin()
  ]
};
