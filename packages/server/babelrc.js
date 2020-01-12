const merge = require('babel-merge');

const node = require('./configs/babel/babel.config.node');
const react = require('./configs/babel/babel.config.react');
const typescript = require('./configs/babel/babel.config.typescript');

module.exports = merge.all([
  node,
  react,
  typescript,
  {
    inputSourceMap: true,
    sourceMaps: true,
  },
]);
