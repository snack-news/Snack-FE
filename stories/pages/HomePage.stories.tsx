import React from 'react';
import { Story } from '@storybook/react';

import { HomePage } from 'Pages/index';

export default (story: Story) => {
  story.add('default', () => <HomePage />);
};
