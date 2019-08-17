import React, { FunctionComponent } from 'react';

import { NewsListPage } from 'Pages/index';
import { getWeekDate } from 'Utils';

export const HomePage: FunctionComponent = props => {
  return <NewsListPage {...props} filter={getWeekDate(new Date())} />;
};
