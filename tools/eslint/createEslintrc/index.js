const mergeEslintrcList = require('./mergeEslintrcList');

const getTemplate = require('./getTemplate');
const createEslintrcOfEnv = require('./createEslintrcOfEnv');
const createEslintrcOfDependencies = require('./createEslintrcOfDependencies');

const createEslintrc = ({
  useDevDependencies = false,

  useTypescript = false,
  useReact = false,

  isNodeJS = false,
  isBrowser = false,
}) =>
  mergeEslintrcList(
    getTemplate({ useTypescript, useReact }),
    createEslintrcOfEnv({ isNodeJS, isBrowser }),
    createEslintrcOfDependencies({ useDevDependencies })
  );

module.exports = createEslintrc;
