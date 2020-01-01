/* eslint-disable max-lines */

const airbnbBaseStyleRules = require('eslint-config-airbnb-base/rules/style').rules;
const airbnbBaseVariablesRules = require('eslint-config-airbnb-base/rules/variables').rules;

module.exports = {
  rules: {
    // https://github.com/typescript-eslint/typescript-eslint/issues/291
    'no-dupe-class-members': 'off',

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
    '@typescript-eslint/indent': 'off',
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
    '@typescript-eslint/no-magic-numbers': [
      'warn',
      { ignoreNumericLiteralTypes: true, ignore: [0] },
    ],
  },
};
