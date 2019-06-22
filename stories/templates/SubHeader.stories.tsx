import React from 'react';
import { storiesOf } from '@storybook/react';

import { SubHeader } from 'Templates/index';

export default (name: string) => {
  storiesOf(name, module).add('default', () => <SubHeader />);
};
