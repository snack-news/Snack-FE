const babelConfig = require('../babel.config.storybook')

module.exports = ({ config, mode }) => {
  config.module.rules.push({
    test: /\.(ts|tsx)$/,
    loader: require.resolve('babel-loader'),
    options: {
      ...babelConfig,
    },
  });
  config.resolve.extensions.push('.ts', '.tsx');
  return config;
};