module.exports = {
  extends: ['prettier/react'],
  plugins: ['react-hooks'],
  rules: {
    // jsx 구문을 tsx에서도 허용
    'react/jsx-filename-extension': ['error', { extensions: ['.jsx', '.tsx'] }],

    // eslint-plugin-react-hooks
    'react-hooks/rules-of-hooks': 'error',
    'react-hooks/exhaustive-deps': 'warn',

    // React Typescript 의 경우 prop-types는 설정하지 않아도 됨.
    'react/prop-types': 'off',
  },
};
