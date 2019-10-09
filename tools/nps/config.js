const path = require('path');

const PATHS = require('../PATHS');

module.exports = {
  test: {
    configPath: path.resolve(PATHS.CONFIG, 'jest', 'jest.config.js'),
  },
  eslint: {
    configPath: path.resolve(PATHS.CONFIG, 'eslint', '.eslintrc.js'),
    ignorePath: path.resolve(PATHS.ROOT, '.gitignore'),
  },
  ts: {
    configPath: path.resolve(process.cwd(), './tsconfig.json'),
  },
  serverBabel: {
    configPath: path.resolve(PATHS.CONFIG, 'babel', 'babel.config.node.js'),
  },
  clientWebpack: {
    prodConfigPath: path.resolve(PATHS.CONFIG, 'webpack', 'webpack.config.prod.js'),
    devConfigPath: path.resolve(PATHS.CONFIG, 'webpack', 'webpack.config.dev.js'),
  },
  storybook: {
    configPath: path.resolve(PATHS.CONFIG, 'storybook'),
  },
};
