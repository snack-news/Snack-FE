import React from 'react';
import { Story } from '@storybook/react';

import { CompanySelectPage } from 'Pages/index';

export default (story: Story) => {
  story.add('default', () => <CompanySelectPage />);
};
