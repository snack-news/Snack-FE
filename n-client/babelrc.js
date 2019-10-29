const merge = require('babel-merge');

const common = require('~tools/babel/templates/babel.config.common');
const browser = require('~tools/babel/templates/babel.config.browser');
const react = require('~tools/babel/templates/babel.config.react');
const typescript = require('~tools/babel/templates/babel.config.typescript');

module.exports = merge.all([common, browser, react, typescript]);
