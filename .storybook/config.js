import { configure, addParameters, addDecorator } from '@storybook/react';
// import { withPropsTable } from 'storybook-addon-react-docgen';
import { withKnobs } from '@storybook/addon-knobs';

import '@storybook/addon-console';

import '../src/common';

// import Outline from '../stories/Outline';

// addDecorator(withPropsTable({
//   propTablesExclude: [Outline]
// }));

addDecorator(withKnobs)

addParameters({
  options: {

  },
  // viewport: {
  //   defaultViewport: 'iphone6'
  // }
})

function loadStories() {
  const req = require.context('../stories', true, /\.stories\.tsx?$/);
  req.keys().forEach(filename => req(filename));
}

configure(loadStories, module);