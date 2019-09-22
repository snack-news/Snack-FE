const path = require('path');

module.exports = {
  src: path.resolve(__dirname, './src/index.tsx'),
  tsConfig: path.resolve(__dirname, './tsconfig.json'),
  fileExtensions: 'js,ts,jsx,tsx',
};
