const merge = require('babel-merge');

const browser = require('~tools/babel/config/babel.config.browser');
const styled = require('~tools/babel/config/babel.config.styled');
const react = require('~tools/babel/config/babel.config.react');
const typescript = require('~tools/babel/config/babel.config.typescript');

// TODO env 값을 이용하여 빌드 방식 변경

module.exports = merge.all([
  browser,
  styled,
  react,
  typescript,
  {
    inputSourceMap: true,
    sourceMaps: true,
  },
]);
