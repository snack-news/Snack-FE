const flatten = require('lodash.flatten');

const getListByKey = require('./getListByKey');
const mergeObjectList = require('./mergeObjectList');

const mergeEslintrcList = (...eslintrcList) => {
  return {
    ...mergeObjectList(eslintrcList),

    extends: getExtends(eslintrcList),
    plugins: getPlugins(eslintrcList),
    settings: getSettings(eslintrcList),
    env: getEnv(eslintrcList),
    rules: getRules(eslintrcList),
  };
};

const getExtends = eslintrcList =>
  flatten(getListByKey(eslintrcList, 'extends'));

const getPlugins = eslintrcList =>
  flatten(getListByKey(eslintrcList, 'plugins'));

const getSettings = eslintrcList =>
  mergeObjectList(getListByKey(eslintrcList, 'settings'));

const getEnv = eslintrcList =>
  mergeObjectList(getListByKey(eslintrcList, 'env'));

const getRules = eslintrcList =>
  mergeObjectList(getListByKey(eslintrcList, 'rules'));

module.exports = mergeEslintrcList;
