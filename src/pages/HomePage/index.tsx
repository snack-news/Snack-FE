import React, { FunctionComponent } from 'react';

import { NewsListPage } from 'Pages/index';

export const HomePage: FunctionComponent = props => {
  return <NewsListPage {...props} filter={getFilterOnToday()} />;
};

const getFilterOnToday = () => {
  // TODO 오늘을 기준으로 보여줘야 되는 yyyy년 mm월 ww주 구해서 NewsListPage에 전달.
  return { year: '2019', month: '08', week: '03' };
};
