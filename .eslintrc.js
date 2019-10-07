const webpackConfig = require('./webpack.config.prod')

const airbnbBaseStyleRules = require('eslint-config-airbnb-base/rules/style').rules;
const airbnbBaseVariablesRules = require('eslint-config-airbnb-base/rules/variables').rules;

module.exports = {
  extends: ['airbnb', 'prettier', 'prettier/@typescript-eslint', 'prettier/react'],
  parser: '@typescript-eslint/parser',
  plugins: ['@typescript-eslint', 'prettier', 'react-hooks'],
  settings: {
    'import/resolver': {
      webpack: {
        config: webpackConfig,
      }
    }
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
    // prettier
    'prettier/prettier': [
      'error',
      {
        singleQuote: true,
        trailingComma: 'es5',
        printWidth: 150,
      },
    ],

    // jsx 구문을 tsx에서도 허용
    'react/jsx-filename-extension': [1, { extensions: ['.jsx', '.tsx'] }],

    // 코드질을 올리기 위한 유용한 규칙들
    complexity: ['warn', { max: 10 }],
    
    'max-lines': ['error', { max: 40, skipBlankLines: true, skipComments: true }],

    'max-lines-per-function': ['error', { max: 10, skipBlankLines: true, skipComments: true, IIFEs: true }],
    'max-depth': ['warn', 2],
    'import/no-extraneous-dependencies': [
      'error',
      {
        devDependencies: true,
        optionalDependencies: true,
        peerDependencies: true,
      },
    ],

    'import/order': [
      'error',
      {
        groups: [['builtin', 'external', 'internal'], ['parent', 'sibling', 'index']],
        'newlines-between': 'always-and-inside-groups',
      },
    ],

    // eslint-plugin-react-hooks
    'react-hooks/rules-of-hooks': 'error',
    'react-hooks/exhaustive-deps': 'warn',

    'no-use-before-define': 'off',

    'import/prefer-default-export': 'off',
    'import/no-default-export': 'error',

    // https://github.com/typescript-eslint/typescript-eslint/issues/291
    'no-dupe-class-members': 'off',
    'lines-between-class-members': 'off',

    'no-useless-constructor': 'error',
    'no-empty-function': 'error',
    'no-magic-numbers': 'warn',
  },

  overrides: [
    {
      files: ['*.ts', '*.tsx'],
      rules: {
        // https://github.com/typescript-eslint/typescript-eslint/issues/265
        '@typescript-eslint/adjacent-overload-signatures': 'off',
        '@typescript-eslint/array-type': 'off',
        '@typescript-eslint/ban-types': 'off',
        camelcase: 'off',
        '@typescript-eslint/camelcase': airbnbBaseStyleRules.camelcase,
        '@typescript-eslint/class-name-casing': 'off',
        '@typescript-eslint/explicit-function-return-type': 'off',
        '@typescript-eslint/explicit-member-accessibility': 'off',
        indent: 'off',
        '@typescript-eslint/indent': airbnbBaseStyleRules.indent,
        '@typescript-eslint/interface-name-prefix': 'off',
        '@typescript-eslint/member-delimiter-style': 'off',
        '@typescript-eslint/no-angle-bracket-type-assertion': 'off',
        'no-array-constructor': 'off',
        '@typescript-eslint/no-array-constructor': airbnbBaseStyleRules['no-array-constructor'],
        '@typescript-eslint/no-empty-interface': 'off',
        '@typescript-eslint/no-explicit-any': 'warn',
        '@typescript-eslint/no-inferrable-types': 'off',
        '@typescript-eslint/no-misused-new': 'off',
        '@typescript-eslint/no-namespace': 'off',
        '@typescript-eslint/no-non-null-assertion': 'off',
        '@typescript-eslint/no-object-literal-type-assertion': 'off',
        '@typescript-eslint/no-parameter-properties': 'off',
        '@typescript-eslint/no-triple-slash-reference': 'off',
        'no-unused-vars': 'off',
        '@typescript-eslint/no-unused-vars': airbnbBaseVariablesRules['no-unused-vars'],
        '@typescript-eslint/no-use-before-define': 'off',
        '@typescript-eslint/no-var-requires': 'off',
        '@typescript-eslint/prefer-interface': 'off',
        '@typescript-eslint/prefer-namespace-keyword': 'off',
        '@typescript-eslint/type-annotation-spacing': 'off',

        'no-useless-constructor': 'off',
        '@typescript-eslint/no-useless-constructor': 'error',
        'no-empty-function': 'off',
        '@typescript-eslint/no-empty-function': 'error',
        'no-magic-numbers': 'off',
        '@typescript-eslint/no-magic-numbers': ['warn', { ignoreNumericLiteralTypes: true }],

        // React Typescript 의 경우 prop-types는 설정하지 않아도 됨.
        'react/prop-types': 'off',
      },
    },
  ],
};
