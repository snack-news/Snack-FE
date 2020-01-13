const path = require('path');

module.exports = {
  extends: ['./index'],
  env: {
    node: true,
  },
  rules: {
    'import/no-extraneous-dependencies': [
      'error',
      {
        packageDir: path.resolve(__dirname, '.'),
        devDependencies: true,
        optionalDependencies: false,
        peerDependencies: false,
      },
    ],
  },
};
