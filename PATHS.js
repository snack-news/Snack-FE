const path = require('path');

const ROOT = path.resolve(__dirname, './');

const CLIENT = path.resolve(ROOT, './client');
// const CLIENT_SRC = path.resolve(CLIENT, './src');
const CLIENT_DIST = path.resolve(CLIENT, './dist');

const SERVER = path.resolve(ROOT, './server');
// const SERVER_SRC = path.resolve(SERVER, './src');
const SERVER_DIST = path.resolve(SERVER, './dist');

module.exports = {
  ROOT,
  CLIENT_DIST,
  SERVER_DIST,
};
