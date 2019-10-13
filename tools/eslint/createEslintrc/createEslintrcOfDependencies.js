const PATHS = require('~root/PATHS');

const createEslintrcOfDependencies = ({ useDevDependencies }) => ({
  rules: {
    'import/no-extraneous-dependencies': [
      'error',
      {
        packageDir: PATHS.ROOT,
        devDependencies: useDevDependencies,
        optionalDependencies: false,
        peerDependencies: false,
      },
    ],
  },
});

module.exports = createEslintrcOfDependencies;
