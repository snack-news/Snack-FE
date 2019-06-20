import React from 'react';
import { Story } from '@storybook/react';

import { CompanyList } from 'Templates/index';

export default (story: Story) => {
  story.add('default', () => <CompanyList />);
};
