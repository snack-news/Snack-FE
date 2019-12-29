const PATHS = require('~root/PATHS');

module.exports = {
  extends: [
    '../tools/eslint/config/eslintrc.common.js',
    '../tools/eslint/config/eslintrc.react.js',
    '../tools/eslint/config/eslintrc.typescript'
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
