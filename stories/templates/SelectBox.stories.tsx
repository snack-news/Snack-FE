import React from 'react';
import { storiesOf } from '@storybook/react';

import { SelectBox } from 'Templates/index';

export default (name: string) => {
  storiesOf(name, module).add('default', () => <SelectBox />);
};
