const { isDevelopment } = require('~root/utils/env');

module.exports = {
  mode: isDevelopment ? 'development' : 'production',
  target: 'web',
  optimization: {
    splitChunks: {
      cacheGroups: {
        commons: {
          test: /[\\/]node_modules[\\/]/,
          name: 'vendors',
          chunks: 'all',
        },
      },
    },
  },
};
