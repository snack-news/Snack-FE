const merge = require('webpack-merge');
const path = require('path');
const common = require('./webpack.config.common');

module.exports = merge(common, {
  mode: 'development',
  devServer: {
    contentBase: path.join(__dirname, 'public/dist'),
    compress: true,
    proxy: {
      '/api': 'http://localhost:8080',
    },
    historyApiFallback: true,
    open: true,
  },
  devtool: 'eval-source-map',
});
