/* eslint-disable max-lines */
const webpack = require('webpack');
const merge = require('webpack-merge');

const path = require('path');

const common = require('./configs/webpack/webpack.config.common');
const browser = require('./configs/webpack/webpack.config.browser');
const devserver = require('./configs/webpack/webpack.config.devserver');
const font = require('./configs/webpack/webpack.config.font');
const htmlTemplate = require('./configs/webpack/webpack.config.htmlTemplate');
const img = require('./configs/webpack/webpack.config.img');
const scss = require('./configs/webpack/webpack.config.scss');

const babelConfig = require('./babelrc');

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
    plugins: [
      new webpack.DefinePlugin({
        IS_SERVER: JSON.stringify(false),
        IS_CLIENT: JSON.stringify(true),
      }),
    ],
  },
  common, // TODO common 제거 가능한지 여부 검사하여 정리
  browser,
  devserver,
  font,
  htmlTemplate,
  img,
  scss
);
