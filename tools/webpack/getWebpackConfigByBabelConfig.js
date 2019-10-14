const getWebpackConfigByBabelConfig = babelConfig => ({
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
});

module.exports = getWebpackConfigByBabelConfig;
