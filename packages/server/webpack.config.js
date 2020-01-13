/* eslint-disable max-lines */
const webpack = require('webpack');
const merge = require('webpack-merge');

const path = require('path');

const babelConfig = require('./babelrc');

const common = require('./configs/webpack/webpack.config.common');
const node = require('./configs/webpack/webpack.config.node');
const ignoreNonJS = require('./configs/webpack/webpack.config.ignoreNonJS');
const font = require('./configs/webpack/webpack.config.font');
const img = require('./configs/webpack/webpack.config.img');
const scss = require('./configs/webpack/webpack.config.scss');

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
    plugins: [
      new webpack.DefinePlugin({
        IS_SERVER: JSON.stringify(false),
        IS_CLIENT: JSON.stringify(true),
      }),
    ],
  },
  common,
  node,
  ignoreNonJS,
  font,
  img,
  scss
);
