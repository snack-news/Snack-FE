const path = require('path');
const babelConfigCommon = require('./babel.config.common');

module.exports = {
  ...babelConfigCommon,
  presets: [
    ...babelConfigCommon.presets,
    [
      '@babel/preset-env',
      {
        useBuiltIns: false,
        modules: 'cjs',
      },
    ],
  ],
  plugins: [
    ...babelConfigCommon.plugins,
    [
      '@babel/plugin-transform-runtime',
      {
        absoluteRuntime: false,
        corejs: {
          version: 3,
          proposals: true,
        },
        helpers: true,
        regenerator: true,
        useESModules: false,
      },
    ],
    [
      'babel-plugin-webpack-alias',
      { config: path.resolve(__dirname, './webpack.config.common.js') },
    ],
  ],
};
