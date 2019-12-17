require('dotenv').config();
const merge = require('webpack-merge');

const path = require('path');

const babelConfig = require('./babelrc');

const common = require('~tools/webpack/webpack.config.common');
const node = require('~tools/webpack/webpack.config.node');
const ignoreNonJS = require('~tools/webpack/webpack.config.ignoreNonJS');
const font = require('~tools/webpack/webpack.config.font');
const img = require('~tools/webpack/webpack.config.img');
const scss = require('~tools/webpack/webpack.config.scss');

module.exports = merge(
  {
    entry: path.resolve(__dirname, 'src/dev.ts'),
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
  node,
  ignoreNonJS,
  font,
  img,
  scss
);
