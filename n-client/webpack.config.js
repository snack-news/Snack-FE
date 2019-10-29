require('dotenv').config();
const merge = require('webpack-merge');

const path = require('path');

const babelConfig = require('./babelrc');

const common = require('~tools/webpack/webpack.config.common');
const browser = require('~tools/webpack/webpack.config.browser');
const devserver = require('~tools/webpack/webpack.config.devserver');
const font = require('~tools/webpack/webpack.config.font');
const htmlTemplate = require('~tools/webpack/webpack.config.htmlTemplate');
const img = require('~tools/webpack/webpack.config.img');
const scss = require('~tools/webpack/webpack.config.scss');

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
  common,
  browser,
  devserver,
  font,
  htmlTemplate,
  img,
  scss
);
