/*
 * Webpack Setup
 */

import merge from 'webpack-merge';
import base from './core/base';
import module from './core/module';
import plugins from './core/plugins';

// Export webpack env config
export build from './jobs/build';
export local from './jobs/local';

// Export default webpack config
export default merge(base, { module }, { plugins });
