import React from 'react';
import { storiesOf } from '@storybook/react';

import { CompanyNewsListPage } from 'Pages/index';

export default (name: string) => {
  storiesOf(name, module).add('default', () => <CompanyNewsListPage />);
};
