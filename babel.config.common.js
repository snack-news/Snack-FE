// TODO '@babel/plugin-transform-runtime 에 대한 browserslist 지원 이슈가 해결되면 수정 필요
// https://github.com/babel/babel/issues/6629

module.exports = {
  presets: ['@babel/typescript', '@babel/preset-react'],
  plugins: [
    'require-context-hook',
    '@babel/proposal-class-properties',
    'babel-plugin-styled-components',
  ],
  inputSourceMap: true,
  sourceMaps: true,
  sourceType: 'module',
};
