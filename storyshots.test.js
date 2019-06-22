import initStoryshots from '@storybook/addon-storyshots';
import { imageSnapshot } from '@storybook/addon-storyshots-puppeteer';

const devices = require('puppeteer/DeviceDescriptors');

const iPhone = devices['iPhone 6'];

const customizePage = page => page.emulate(iPhone);

initStoryshots({
  suite: 'Image storyshots',
  test: imageSnapshot({ storybookUrl: 'http://localhost:8899', customizePage }),
});
