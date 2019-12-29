const merge = require('babel-merge');

const browser = require('~tools/babel/config/babel.config.browser');
const react = require('~tools/babel/config/babel.config.react');
const typescript = require('~tools/babel/config/babel.config.typescript');

module.exports = merge.all([browser, react, typescript, {
  inputSourceMap: true,
  sourceMaps: true,
}]);
