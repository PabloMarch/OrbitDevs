const appPath = 'app';
const buildPath = 'docs';
const uiPath = 'assets';
const localServer = 'http://localhost:8080';

export const PATHS = {
  app: `${process.cwd()}/${appPath}`,
  build: `${process.cwd()}/${buildPath}`,
  publicPath: `${localServer}/`,
  resolvePaths: [ appPath, 'node_modules', 'components' ]
};

export const PRESET = [
  [ 'es2015', { 'modules': false } ],
  'stage-0',
  'react'
]
