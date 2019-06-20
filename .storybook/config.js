import { configure, addParameters, addDecorator } from '@storybook/react';
// import { withPropsTable } from 'storybook-addon-react-docgen';
import { withKnobs } from '@storybook/addon-knobs';

import { storiesOf } from '@storybook/react';

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
  req.keys().forEach(filePath => {
    const paths = filePath.split('/')
    const section = paths[1];
    const baseFileName = paths[paths.length - 1];

    req(filePath).default(storiesOf(`${section}/${baseFileName}`))
  });
}

configure(loadStories, module);