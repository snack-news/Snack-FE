import React from 'react';
import { Story } from '@storybook/react';

import { HorizontalDivider } from 'Templates/index';
import Outline from '../Outline';

export default (story: Story) => {
  story.add('default', () => (
    <Outline>
      <HorizontalDivider />
    </Outline>
  ));
};
