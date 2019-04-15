module.exports = {
  scripts: {
    build: {
      default: 'webpack',
      watch: 'webpack -w',
    },
    test: {
      default: 'jest --coverage',
      watch: 'jest --coverage --watchAll',
    },
    typeCheck: {
      default: 'tsc -p ./tsconfig.json --noEmit',
    },
  },
};
