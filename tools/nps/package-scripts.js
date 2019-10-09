// TODO

// const { open, series, rimraf, concurrent } = require('nps-utils');
const { concurrent, crossEnv } = require('nps-utils');

const path = require('path');

const { CLIENT_SRC, SERVER_SRC, CONFIG } = require('../PATHS');

module.exports = {
  scripts: {
    client: {
      build: {
        script: `webpack --config ${path.resolve(CONFIG, 'webpack/client/webpack.config.prod.js')}`,
        description: 'js 파일 빌드',
      },
      eslint: {
        default: {
          script: `eslint ${CLIENT_SRC} --ext .js --ext .jsx --ext .ts --ext .tsx --color -c ${path.resolve(CLIENT_SRC, '.eslintrc.js')}`,
          description: 'eslint 스크립트 실행',
        },
        autoFix: {
          script: `eslint ${CLIENT_SRC} --ext .js --ext .jsx --ext .ts --ext .tsx --fix --color-c ${path.resolve(CLIENT_SRC, '.eslintrc.js')}`,
          description: 'eslint 스크립트 실행',
        },
      },
      typecheck: {
        default: {
          script: `tsc --noEmit -p ${path.resolve(CLIENT_SRC, 'tsconfig.json')}`,
          description: 'typescript typecheck 실행',
        },
        watch: {
          script: `tsc --noEmit -w -p ${path.resolve(CLIENT_SRC, 'tsconfig.json')}`,
          description: 'typescript typecheck 실행(watch)',
        },
      },
      dev: {
        script: concurrent.nps('server.dev'),
        description: '개발 환경',
      },
    },
    server: {
      default: {
        script: `${crossEnv('NODE_ENV=production')} node ${path.resolve(SERVER_SRC, 'index.js')}`,
        description: '노드 서버 시작',
      },
      dev: {
        script: `${crossEnv('NODE_ENV=development')} node ${path.resolve(SERVER_SRC, 'index.js')}`,
        description: '노드 개발 서버 시작',
      },
    },
  },
};
