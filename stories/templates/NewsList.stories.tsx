import React from 'react';
import { storiesOf } from '@storybook/react';

import { NewsList } from 'Templates/index';

export default (name: string) => {
  storiesOf(name, module).add('default', () => <NewsList />);
};
