const debug = require('debug')('tools:webpack');
const merge = require('webpack-merge');

const { getWebpackConfigByTemplate } = require('./templates');
const { getWebpackConfigByEnv, ENV } = require('./env');
const getWebpackConfigByBabelConfig = require('./getWebpackConfigByBabelConfig');

const createWebpackConfig = (
  { entry, output },
  {
    babelConfig,

    env = ENV.BROWSER,

    useDevServer = false,
    useFont = false,
    useImg = false,
    useScss = false,
    useHtmlTemplate = false,

    ignoreEmit = false,
  }
) => {
  debug('create webpack config\n%O', {
    env,
    useDevServer,
    useFont,
    useImg,
    useScss,
    useHtmlTemplate,
    ignoreEmit,
  });

  const webpackConfig = merge(
    getWebpackConfigByTemplate({
      useDevServer,
      useFont,
      useImg,
      useScss,
      useHtmlTemplate,
      ignoreEmit,
    }),
    getWebpackConfigByBabelConfig(babelConfig),
    getWebpackConfigByEnv(env),
    { entry, output }
  );

  return webpackConfig;
};

module.exports = { createWebpackConfig, ENV };
