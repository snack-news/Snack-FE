import React from 'react';
import { Story } from '@storybook/react';

import { Tabs } from 'Templates/index';

export default (story: Story) => {
  story.add('default', () => <Tabs />);
};
