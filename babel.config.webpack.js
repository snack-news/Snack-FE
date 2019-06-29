const babelConfigCommon = require('./babel.config.common');

module.exports = {
  ...babelConfigCommon,
  presets: [
    ...babelConfigCommon.presets,
    [
      '@babel/preset-env',
      {
        useBuiltIns: false,
      },
    ],
  ],
  plugins: [...babelConfigCommon.plugins],
};
