module.exports = {
  extends: ["airbnb"],
  parser: "@typescript-eslint/parser",
  plugins: ["@typescript-eslint"],
  parserOptions: {
    ecmaVersion: 6,
    sourceType: "module"
  },
  env: {
    browser: true,
    es6: true,
    jest: true
  },
  rules: {
    "react/jsx-filename-extension": [1, { extensions: [".jsx", ".tsx"] }]
  }
};
