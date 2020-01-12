// TODO https://www.styled-components.com/docs/tooling#babel-plugin
const browserslist = require('./browserslist');

module.exports = {
  presets: [
    [
      '@babel/preset-env',
      {
        useBuiltIns: false,
        targets: browserslist,
      },
    ],
  ],
  plugins: [
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
  ],
};
