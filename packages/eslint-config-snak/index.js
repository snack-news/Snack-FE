module.exports = {
  extends: [
    './config/eslintrc.common',
    './config/eslintrc.react',
    './config/eslintrc.typescript'
  ].map(require.resolve),
  parser: '@typescript-eslint/parser',
  plugins: ['@typescript-eslint', 'prettier'],
  parserOptions: {
    ecmaVersion: 6,
    sourceType: 'module',
  },
  settings: {
    'import/resolver': {
      node: {
        extensions: ['.ts', '.tsx', '.js', '.jsx'],
      },
    },
  },
  env: {
    es6: true,
  },
  rules: {}
};
