const { createEslintrc } = require('~root/tools/eslint');

module.exports = createEslintrc({
  useDevDependencies: true,
  isNodeJS: true,
})
