const get = require('lodash.get');
const has = require('lodash.has');

const getListByKey = (objectList, key) =>
  objectList.filter(obj => has(obj, key)).map(obj => get(obj, key));

module.exports = getListByKey;
