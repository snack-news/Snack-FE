import { configure, addParameters, addDecorator } from '@storybook/react';
import { withPropsTable } from 'storybook-addon-react-docgen';
import '@storybook/addon-console';

import Outline from '../stories/Outline'

addDecorator(withPropsTable({
  propTablesExclude: [Outline]
}));

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