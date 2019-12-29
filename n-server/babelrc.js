const merge = require('babel-merge');

const node = require('~tools/babel/config/babel.config.node');
const react = require('~tools/babel/config/babel.config.react');
const typescript = require('~tools/babel/config/babel.config.typescript');

module.exports = merge.all([node, react, typescript, {
  inputSourceMap: true,
  sourceMaps: true,
}]);
