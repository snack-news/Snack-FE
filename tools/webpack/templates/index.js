const merge = require('webpack-merge');

const webpackConfigCommon = require('./webpack.config.common');
const webpackConfigDevServer = require('./webpack.config.devserver');
const webpackConfigFont = require('./webpack.config.font');
const webpackConfigImg = require('./webpack.config.img');
const webpackConfigScss = require('./webpack.config.scss');
const webpackConfigHtmlTemplate = require('./webpack.config.htmlTemplate');

const getWebpackConfigByTemplate = ({
  useDevServer,
  useFont,
  useImg,
  useScss,
  useHtmlTemplate,
}) =>
  merge(
    webpackConfigCommon,
    useDevServer ? webpackConfigDevServer : {},
    useFont ? webpackConfigFont : {},
    useImg ? webpackConfigImg : {},
    useScss ? webpackConfigScss : {},
    useHtmlTemplate ? webpackConfigHtmlTemplate : {}
  );

module.exports = { getWebpackConfigByTemplate };
