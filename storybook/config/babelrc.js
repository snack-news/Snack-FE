const merge = require('babel-merge');

const common = require('~tools/babel/templates/babel.config.common');
const browser = require('~tools/babel/templates/babel.config.browser');
const react = require('~tools/babel/templates/babel.config.react');
const typescript = require('~tools/babel/templates/babel.config.typescript');
const styled = require('~tools/babel/templates/babel.config.styled');

module.exports = merge.all([styled, common, browser, react, typescript]);
