import React from 'react';
import { storiesOf } from '@storybook/react';

import { PicksPage } from 'Pages/index';

export default (name: string) => {
  storiesOf(name, module).add('default', () => <PicksPage />);
};
