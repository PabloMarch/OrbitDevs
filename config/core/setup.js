import path from 'path';

export const PATHS = {
  app: path.join( process.cwd(), 'app' ),
  build: path.join( process.cwd(), 'docs' ),
  resolvePaths: [ 'node_modules', 'app', 'components' ]
};

export const PRESET = [
  [ 'es2015', { 'modules': false } ],
  'stage-0',
  'react'
]
