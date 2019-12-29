const PATHS = require('~root/PATHS');

module.exports = {
  extends: ['./tools/eslint/config/eslintrc.common.js'],
  env: {
    node: true,
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
  },
};
