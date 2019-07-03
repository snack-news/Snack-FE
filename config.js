const path = require('path');

module.exports = {
  storybook: {
    port: 8899,
    host: 'localhost',
    configFile: path.resolve(__dirname, './.storybook/'),
    outputDir: path.resolve(__dirname, './.storybook-static/'),
  },
};
