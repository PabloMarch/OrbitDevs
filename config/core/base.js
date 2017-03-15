import path from 'path';
import { PATHS } from './setup';

export default {
  entry: {
    app: [ path.join(PATHS.app, 'index.js') ],
    vendor: ['react']
  },
  output: {
    path: PATHS.build,
    filename: 'app.js'
  },
  resolve: {
    modules: PATHS.resolvePaths
  }
};
