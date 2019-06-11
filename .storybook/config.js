import { configure, addParameters } from '@storybook/react';

addParameters({
  options: {

  },
  viewport: {
    defaultViewport: 'iphone6'
  }
})

function loadStories() {
  const req = require.context('../stories', true, /\.stories\.tsx?$/);
  req.keys().forEach(filename => req(filename));
}

configure(loadStories, module);