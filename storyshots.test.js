import initStoryshots from '@storybook/addon-storyshots';
import { imageSnapshot } from '@storybook/addon-storyshots-puppeteer';
import config from './config';

const devices = require('puppeteer/DeviceDescriptors');

const iPhone = devices['iPhone 6'];

const customizePage = page => page.emulate(iPhone);

// React renederer 테스트
initStoryshots();

// screenshot image 테스트
initStoryshots({
  suite: 'Image storyshots',
  test: imageSnapshot({
    storybookUrl: `http://${config.storybook.host}:${config.storybook.port}`,
    customizePage,
  }),
});
