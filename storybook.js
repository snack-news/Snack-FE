const path = require('path');
const storybook = require('@storybook/react/standalone');
const config = require('./config');

storybook({
  mode: 'dev',
  port: config.storybook.port,
  host: config.storybook.host,
  configDir: path.resolve(__dirname, './.storybook/'),
});
