require('dotenv').config();
const merge = require('webpack-merge');

const path = require('path');

const babelConfig = require('./babelrc');

const common = require('~tools/webpack/config/webpack.config.common');
const browser = require('~tools/webpack/config/webpack.config.browser');
const devserver = require('~tools/webpack/config/webpack.config.devserver');
const font = require('~tools/webpack/config/webpack.config.font');
const htmlTemplate = require('~tools/webpack/config/webpack.config.htmlTemplate');
const img = require('~tools/webpack/config/webpack.config.img');
const scss = require('~tools/webpack/config/webpack.config.scss');

// TODO env 값을 이용하여 빌드 방식 변경

module.exports = merge(
  {
    entry: path.resolve(__dirname, 'src/index.tsx'),
    output: {
      filename: 'index.js',
      path: path.resolve(__dirname, 'dist'),
      publicPath: '/',
    },
    module: {
      rules: [
        {
          test: /\.(js|jsx|ts|tsx)?$/,
          exclude: /(node_modules|bower_components)/,
          use: {
            loader: 'babel-loader',
            options: babelConfig,
          },
        },
      ],
    },
  },
  common, // TODO common 제거 가능한지 여부 검사하여 정리
  browser,
  devserver,
  font,
  htmlTemplate,
  img,
  scss
);
