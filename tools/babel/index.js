const debug = require('debug')('tools:babel');
const merge = require('babel-merge');

const babelrcCommon = require('./templates/babel.config.common');
const babelrcReact = require('./templates/babel.config.react');
const babelrcTypescript = require('./templates/babel.config.typescript');

const { getBabelrcByEnv, ENV } = require('./env');

const createBabelrc = ({
  env = ENV.BROWSER,

  useReact = false,
  useTypescript = false,
}) => {
  debug('create babelrc\n%O', { env, useReact, useTypescript });

  const babelrc = merge.all([
    babelrcCommon,
    getBabelrcByEnv(env),
    useReact ? babelrcReact : {},
    useTypescript ? babelrcTypescript : {},
  ]);

  return babelrc;
};

module.exports = {
  createBabelrc,
  ENV,
};
