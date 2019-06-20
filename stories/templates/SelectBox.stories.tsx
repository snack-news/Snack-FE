import React from 'react';
import { Story } from '@storybook/react';

import { SelectBox } from 'Templates/index';

export default (story: Story) => {
  story.add('default', () => <SelectBox />);
};
