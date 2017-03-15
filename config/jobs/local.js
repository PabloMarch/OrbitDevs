import { DefinePlugin, HotModuleReplacementPlugin } from 'webpack';

import { PATHS } from '../core/setup';

export default {
  devtool: 'eval-source-map',
  module: {
    rules: [
      {
        test: /\.scss$/,
        use: [
          { loader: 'style-loader' },
          {
            loader: 'css-loader',
            options: {
              // modules: true,
              importLoaders: 1,
              sourceMap: true,
              // localIdentName: '[path]___[name]__[local]___[hash:base64:5]',
              includePaths: [ './app', './app/components' ]
            }
          },
          {
            loader: 'sass-loader',
            options: { sourceMap: true }
          }
        ],
        include: PATHS.app
      }
    ]
  },
  plugins: [
    new DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify('development')
    }),
    new HotModuleReplacementPlugin()
  ],
  devServer: {
    historyApiFallback: true,
    hot: true,
    inline: true,
    stats: 'errors-only'
  }
};
