import 'source-map-support/register';

console.log('test');

const end = () => {
  // throw new Error('test');
};

const start = () => {
  console.log('abc');
  end();
};

start();
