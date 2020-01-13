/* eslint-disable max-lines */

module.exports = {
  extends: ['airbnb', 'prettier', 'prettier/@typescript-eslint'],
  rules: {
    // prettier
    'prettier/prettier': [
      'error',
      {
        singleQuote: true,
        trailingComma: 'es5',
        printWidth: 100,
      },
    ],

    // 코드질을 올리기 위한 유용한 규칙들
    complexity: ['warn', { max: 10 }],

    'max-lines': ['error', { max: 35, skipBlankLines: true, skipComments: true }],

    'max-lines-per-function': 'off',
    'max-depth': ['warn', { max: 2 }],

    'import/order': [
      'error',
      {
        groups: [
          ['builtin', 'external', 'internal'],
          ['parent', 'sibling', 'index'],
        ],
        'newlines-between': 'always-and-inside-groups',
      },
    ],

    'no-use-before-define': 'off',

    'import/prefer-default-export': 'off',
    'import/no-default-export': 'error',

    'lines-between-class-members': 'off',

    'no-useless-constructor': 'error',
    'no-empty-function': 'error',
    'no-magic-numbers': ['warn', { ignore: [0, 1] }],

    'no-plusplus': 'off',
    'no-minusminus': 'off',
  },
  globals: {
    IS_CLIENT: 'readonly',
    IS_SERVER: 'readonly',
  },
};
