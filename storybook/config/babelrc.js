const merge = require('babel-merge');

const browser = require('~tools/babel/config/babel.config.browser');
const react = require('~tools/babel/config/babel.config.react');
const typescript = require('~tools/babel/config/babel.config.typescript');
const styled = require('~tools/babel/config/babel.config.styled');

module.exports = merge.all([styled, browser, react, typescript, {
  inputSourceMap: true,
  sourceMaps: true,
}]);
