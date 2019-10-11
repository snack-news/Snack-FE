require('dotenv').config();
const path = require('path');

const babelConfig = require('./babelrc');

const { createWebpackConfig, ENV } = require('~root/tools/webpack');

module.exports = createWebpackConfig(
  {
    entry: path.resolve(__dirname, 'src/index.ts'),
    output: {
      filename: 'index.js',
      path: path.resolve(__dirname, 'dist'),
      publicPath: '/',
    },
  },
  {
    env: ENV.NODE_JS,
    babelConfig,

    useFont: true,
    useImg: true,
    useScss: true,

    // .js 파일이 아니면 생성하지 않음.
    ignoreEmit: /(?<!\.js)$/,
  }
);
