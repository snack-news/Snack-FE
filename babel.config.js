// TODO '@babel/plugin-transform-runtime 에 대한 browserslist 지원 이슈가 해결되면 수정 필요
// https://github.com/babel/babel/issues/6629

module.exports = {
  presets: [
    '@babel/typescript',
    '@babel/preset-react',
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
    '@babel/proposal-class-properties',
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
    'babel-plugin-styled-components',
  ],
  inputSourceMap: true,
  sourceMaps: true,
  sourceType: 'module',
};
