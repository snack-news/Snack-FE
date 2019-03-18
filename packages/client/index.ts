import { render } from '@snack-fe/app';

console.log('index');

render(
  {
    compiler: 'webpack',
    framework: 'react',
  },
  document.getElementById('root'),
);
