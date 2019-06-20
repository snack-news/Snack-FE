const path = require('path');
const storybook = require('@storybook/react/standalone');
const config = require('./config');

storybook({
  mode: 'dev',
  port: config.port,
  configDir: path.resolve(__dirname, '../.storybook/'),
});
