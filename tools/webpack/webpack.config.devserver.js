module.exports = {
  devServer: {
    compress: true,
    proxy: {
      '/api': 'http://localhost:8080',
    },
    historyApiFallback: true,
    open: true,
  },
};
