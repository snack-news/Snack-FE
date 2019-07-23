// const { open, series, rimraf, concurrent } = require('nps-utils');
const { concurrent, crossEnv } = require('nps-utils');

module.exports = {
  scripts: {
    build: {
      script: 'webpack --config ./webpack.config.prod.js',
      description: 'js 파일 빌드',
    },
    server: {
      default: {
        script: `${crossEnv('NODE_ENV=production')} node ./server/index.js`,
        description: '노드 서버 시작',
      },
      dev: {
        script: `${crossEnv('NODE_ENV=development')} node ./server/index.js`,
        description: '노드 개발 서버 시작',
      },
    },
    eslint: {
      default: {
        script:
          'esw ./src --ext .js --ext .jsx --ext .ts --ext .tsx --ignore-path ./.gitignore --color',
        description: 'eslint 스크립트 실행',
      },
      watch: {
        script:
          'esw ./src --ext .js --ext .jsx --ext .ts --ext .tsx --ignore-path ./.gitignore -w --color --clear',
        description: 'eslint 스크립트 실행',
      },
      autoFix: {
        script:
          'esw ./src --ext .js --ext .jsx --ext .ts --ext .tsx --ignore-path ./.gitignore --fix --color',
        description: 'eslint 스크립트 실행',
      },
    },
    typecheck: {
      default: {
        script: 'tsc --noEmit',
        description: 'typescript typecheck 실행',
      },
      watch: {
        script: 'tsc --noEmit -w',
        description: 'typescript typecheck 실행(watch)',
      },
    },
    storybook: {
      script: 'node storybook.js',
      description: '스토리북 실행',
    },
    test: {
      script: 'jest --watchAll',
      description: '테스트',
    },
    dev: {
      script: concurrent.nps('server.dev'),
      description: '개발 환경',
    },
  },
};
