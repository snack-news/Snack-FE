const path = require('path');

module.exports = {
  extends: ['snak'],
  env: {
    'shared-node-browser': true,
  },
  rules: {
    'import/no-extraneous-dependencies': [
      'error',
      {
        packageDir: path.resolve(__dirname, '..'),
        devDependencies: false, 
        optionalDependencies: false,
        peerDependencies: false,
      },
    ],
  },
};
