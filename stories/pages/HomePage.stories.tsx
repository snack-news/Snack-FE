import React from 'react';
import { storiesOf } from '@storybook/react';

import { HomePage } from 'Pages/index';
import { SelectItemListBox } from 'Templates/index';

export default (name: string) => {
  storiesOf(name, module)
    .add('default', () => <HomePage />)
    .add('with SelectItemListBox', () => (
      <>
        <HomePage />
        <SelectItemListBox />
      </>
    ));
};
