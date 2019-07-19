import React from 'react';
import { storiesOf } from '@storybook/react';

import { MenuPage } from 'Pages/index';

export default (name: string) => {
  storiesOf(name, module).add('default', () => <MenuPage />);
};
