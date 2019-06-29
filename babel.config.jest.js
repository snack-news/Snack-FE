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
    'require-context-hook',
    [
      'babel-plugin-webpack-alias',
      { config: path.resolve(__dirname, './webpack.config.common.js') },
    ],
  ],
};
