const { createEslintrc } = require('~root/tools/eslint');

module.exports = createEslintrc({
  useTypescript: true,
  useReact: true,

  isNodeJS: true,
})
