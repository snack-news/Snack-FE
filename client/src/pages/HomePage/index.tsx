import React, { FunctionComponent } from 'react';

import { NewsListPage } from '~client/pages/index';
import { getWeekDate } from '~client/utils';

export const HomePage: FunctionComponent = props => {
  return <NewsListPage {...props} filter={getWeekDate(new Date())} />;
};
