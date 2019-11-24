const merge = require('babel-merge');

const common = require('~tools/babel/templates/babel.config.common');
const node = require('~tools/babel/templates/babel.config.node');
const react = require('~tools/babel/templates/babel.config.react');
const typescript = require('~tools/babel/templates/babel.config.typescript');

module.exports = merge.all([common, node, react, typescript]);
