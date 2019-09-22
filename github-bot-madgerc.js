const path = require('path');

module.exports = {
  src: path.resolve(__dirname, './src/index.tsx'),
  webpackConfig: path.resolve(__dirname, './webpack.config.resolve.js'),
  fileExtensions: ['js', 'ts', 'jsx', 'tsx'],
};
