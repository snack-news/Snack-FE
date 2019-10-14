const babelrcBrowser = require('./templates/babel.config.browser');
const babelrcNodeJS = require('./templates/babel.config.node');

const ENV = {
  BROWSER: 'BROWSER',
  NODE_JS: 'NODE_JS',
};

const babelrcEnv = {
  [ENV.BROWSER]: babelrcBrowser,
  [ENV.NODE_JS]: babelrcNodeJS,
};

const getBabelrcByEnv = env => babelrcEnv[env];

module.exports = {
  getBabelrcByEnv,
  ENV,
};
