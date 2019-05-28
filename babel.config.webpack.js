const babelConfigCommon = require('./babel.config.common');

module.exports = {
  ...babelConfigCommon,
  presets: [
    ...babelConfigCommon.presets,
    [
      '@babel/preset-env',
      {
        useBuiltIns: false,
        debug: true,
        modules: false,
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
        useESModules: true,
      },
    ],
  ],
};
