module.exports = {
  scripts: {
    server: {
      default: 'nodemon src/index.js',
    },
    test: {
      default: 'jest --coverage',
      watch: 'jest --coverage --watchAll',
    },
  },
};
