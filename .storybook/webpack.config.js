const babelConfig = require('../babel.config.storybook')

module.exports = ({ config, mode }) => {
  config.module.rules.push({
    test: /\.(ts|tsx)$/,
    use: [{
      loader: require.resolve('babel-loader'),
      options: {
        ...babelConfig,
      },
    }, {
      loader: require.resolve('react-docgen-typescript-loader'),
    }]
    
  });

  config.resolve.extensions.push('.ts', '.tsx');

  return config;
};