const PATHS = require('~root/PATHS');

module.exports = {
  extends: [
    '../tools/eslint/templates/eslintrc.common.js',
    '../tools/eslint/templates/eslintrc.react.js',
    '../tools/eslint/templates/eslintrc.typescript'
  ],
  env: {
    'shared-node-browser': true,
  },
  rules: {
    'import/no-extraneous-dependencies': [
      'error',
      {
        packageDir: PATHS.ROOT,
        devDependencies: true, 
        optionalDependencies: false,
        peerDependencies: false,
      },
    ],
    'import/no-default-export': 'off',
  },
};
