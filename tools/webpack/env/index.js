const webpackConfigBrowser = require('./templates/webpack.config.browser');
const webpackConfigNodeJS = require('./templates/webpack.config.node');

const ENV = {
  BROWSER: 'BROWSER',
  NODE_JS: 'NODE_JS',
};

const webpackConfigByEnv = {
  [ENV.BROWSER]: webpackConfigBrowser,
  [ENV.NODE_JS]: webpackConfigNodeJS,
};

const getWebpackConfigByEnv = env => webpackConfigByEnv[env];

module.exports = {
  getWebpackConfigByEnv,
  ENV,
};
