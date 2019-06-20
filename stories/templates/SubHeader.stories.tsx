import React from 'react';
import { Story } from '@storybook/react';

import { SubHeader } from 'Templates/index';

export default (story: Story) => {
  story.add('default', () => <SubHeader />);
};
