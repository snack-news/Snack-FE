import React from 'react';
import { storiesOf } from '@storybook/react';

import { AboutPage } from 'Pages/index';

export default (name: string) => {
  storiesOf(name, module).add('default', () => <AboutPage />);
};
