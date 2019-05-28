// const { open, series, rimraf, concurrent } = require('nps-utils');
const { concurrent } = require('nps-utils');

module.exports = {
  scripts: {
    build: {
      script: 'webpack --config ./webpack.config.prod.js',
      description: 'js 파일 빌드',
    },
    server: {
      script: 'node ./server/index.js',
      description: '노드 서버 시작',
    },
    'dev-server': {
      script: 'webpack-dev-server --config ./webpack.config.dev.js',
      description: 'webpack-dev-server 서버 시작',
    },
    dev: {
      script: concurrent.nps('server', 'dev-server'),
      description: '개발 환경 실행',
    },
  },
};
