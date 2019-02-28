module.exports = {
  extends: ["airbnb"],
  parser: "babel-eslint",
  parserOptions: {
    ecmaVersion: 6,
    sourceType: "module"
  },
  env: {
    browser: true,
    es6: true,
    jest: true
  }
};
