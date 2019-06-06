// const { open, series, rimraf, concurrent } = require('nps-utils');
const { concurrent, crossEnv } = require('nps-utils');

module.exports = {
  scripts: {
    build: {
      script: 'webpack --config ./webpack.config.prod.js',
      description: 'js 파일 빌드',
    },
    server: {
      script: `${crossEnv('NODE_ENV=production')} node ./server/index.js`,
      description: '노드 서버 시작',
    },
    dev: {
      script: `${crossEnv('NODE_ENV=development')} node ./server/index.js`,
      description: '노드 개발 서버 시작',
    },
  },
};
