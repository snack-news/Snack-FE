module.exports = {
  extends: ['prettier/react', 'plugin:react/recommended'],
  plugins: ['react-hooks', 'react'],
  rules: {
    // jsx 구문을 tsx에서도 허용
    'react/jsx-filename-extension': ['error', { extensions: ['.jsx', '.tsx'] }],

    // eslint-plugin-react-hooks
    'react-hooks/rules-of-hooks': 'error',
    'react-hooks/exhaustive-deps': 'warn',

    'react/jsx-max-depth': ['error', { max: 1 }],

    // React Typescript 의 경우 prop-types는 설정하지 않아도 됨.
    'react/prop-types': 'off',
  },
};
