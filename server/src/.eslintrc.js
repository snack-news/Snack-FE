const PATHS = require('~root/PATHS');

module.exports = {
  extends: [
    '../../tools/eslint/templates/eslintrc.common.js',
    '../../tools/eslint/templates/eslintrc.react.js',
    '../../tools/eslint/templates/eslintrc.typescript'
  ],
  env: {
    node : true,
  },
  rules: {
    'import/no-extraneous-dependencies': [
      'error',
      {
        packageDir: PATHS.ROOT,
        devDependencies: false, 
        optionalDependencies: false,
        peerDependencies: false,
      },
    ],
  },
};
