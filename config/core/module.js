import { PATHS, PRESET } from './setup';

export default {
  rules: [
    {
      test: /\.js$/,
      enforce: 'pre',
      exclude: /node_modules/,
      include: PATHS.app,
      use: [
        {
          loader: 'eslint-loader'
        },
        {
          loader: 'babel-loader',
          options: {
            presets: PRESET,
            cacheDirectory: true
          }
        }
      ]
    },
    {
      test: /\.(png|jpg|gif|svg|woff|woff2)$/,
      use: [
        {
          loader : 'url-loader',
          options: {
            limit: 10000
          }
        }
      ]
    },
    {
      test: /\.(mp4|ogg)$/,
      use: [
        'file-loader'
      ]
    }
  ]
};
