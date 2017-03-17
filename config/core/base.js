import { PATHS } from './setup';

export default {
  entry: {
    app: [ `${PATHS.app}/index.js` ],
    vendor: ['react']
  },
  output: {
    path: PATHS.build,
    filename: 'app.bundle.js'
  },
  resolve: {
    modules: PATHS.resolvePaths
  }
};
