module.exports = {
  extends: ['airbnb'],
  parser: '@typescript-eslint/parser',
  plugins: ['@typescript-eslint'],
  settings: {
    'import/resolver': {
      node: {
        extensions: ['.js', '.jsx', '.ts', '.tsx'],
      },
    },
  },
  parserOptions: {
    ecmaVersion: 6,
    sourceType: 'module',
  },
  env: {
    browser: true,
    es6: true,
    jest: true,
  },
  rules: {
    'react/jsx-filename-extension': [1, { extensions: ['.jsx', '.tsx'] }],
    complexity: ['error', { max: 10 }],
    'max-lines': ['error', { max: 100, skipBlankLines: true, skipComments: true }],
    'max-depth': ['error', 2],
    'import/no-extraneous-dependencies': 'off',
  },
};
