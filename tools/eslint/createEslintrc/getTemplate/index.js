const mergeEslintrcList = require('../mergeEslintrcList');

const eslintrcCommon = require('./templates/eslintrc.common');

const eslintrcReact = require('./templates/eslintrc.react');
const eslintrcTypescript = require('./templates/eslintrc.typescript');

const getTemplate = ({ useTypescript, useReact }) => {
  return mergeEslintrcList(
    eslintrcCommon,
    useTypescript ? eslintrcTypescript : {},
    useReact ? eslintrcReact : {}
  );
};

module.exports = getTemplate;
