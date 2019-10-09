require('dotenv').config();
const path = require('path');

const babelConfig = require('./babelrc');

const { createWebpackConfig, ENV } = require('~root/tools/webpack');

module.exports = createWebpackConfig(
  {
    entry: path.resolve(__dirname, 'src/index.tsx'),
    output: {
      filename: 'index.js',
      path: path.resolve(__dirname, 'dist'),
      publicPath: '/',
    },
  },
  {
    babelConfig,

    env: ENV.BROWSER,

    useDevServer: true,
    useFont: true,
    useImg: true,
    useScss: true,
    useHtmlTemplate: true,
  }
);
