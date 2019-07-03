const storybook = require('@storybook/react/standalone');
const config = require('./config');

module.exports = async () => {
  await storybook({
    mode: 'static',
    outputDir: config.storybook.outputDir,
    configDir: config.storybook.configFile,
    ci: true,
  });
};
