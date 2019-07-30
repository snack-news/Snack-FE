// TODO '@babel/plugin-transform-runtime 에 대한 browserslist 지원 이슈가 해결되면 수정 필요
// https://github.com/babel/babel/issues/6629

module.exports = {
  presets: ['@babel/typescript', '@babel/preset-react'],
  plugins: [
    ['@babel/plugin-proposal-decorators', { legacy: true }],
    ['@babel/plugin-proposal-class-properties', { loose: true }],
    '@babel/proposal-class-properties',
    'babel-plugin-styled-components',
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
  inputSourceMap: true,
  sourceMaps: true,
  sourceType: 'module',
};
