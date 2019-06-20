import React from 'react';
import { Story } from '@storybook/react';

import { Header } from 'Templates/index';

export default (story: Story) => {
  story.add('default', () => <Header />);
};
