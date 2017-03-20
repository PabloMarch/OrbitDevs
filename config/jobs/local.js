import { DefinePlugin, HotModuleReplacementPlugin } from 'webpack';
import { PATHS } from '../core/setup';

export default {
  devtool: 'eval-source-map',
  module: {
    rules: [
      {
        test: /\.scss$/,
        exclude: /node_modules/,
        use: [
          { loader: 'style-loader' },
          { loader: 'css-loader' },
          { loader: 'sass-loader',
              options: {
                sourceMap: true
              }
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
