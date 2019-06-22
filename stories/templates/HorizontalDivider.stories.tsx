import React from 'react';
import { storiesOf } from '@storybook/react';

import { HorizontalDivider } from 'Templates/index';
import Outline from '../Outline';

export default (name: string) => {
  storiesOf(name, module).add('default', () => (
    <Outline>
      <HorizontalDivider />
    </Outline>
));
};
