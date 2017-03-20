import { PATHS } from './setup';

export default {
  entry: {
    app: [ `${PATHS.app}/index.js` ],
    vendor: ['react', 'react-dom', 'react-redux', 'redux', 'redux-thunk', 'mojs', 'matter-js']
  },
  output: {
    path: PATHS.build,
    filename: 'app.bundle.js'
  },
  resolve: {
    modules: PATHS.resolvePaths
  }
};
