import React from 'react';
import { storiesOf } from '@storybook/react';

import { NewsPage } from 'Pages/index';

export default (name: string) => {
  storiesOf(name, module).add('default', () => <NewsPage />);
};
