import React, { FunctionComponent } from 'react';

import { NewsListPage } from 'Pages/index';

export const HomePage: FunctionComponent = props => {
  return <NewsListPage {...props} filter={getFilterOnToday()} />;
};

const getFilterOnToday = () => {
  const today = new Date();
  const year = `${today.getFullYear()}`;
  const month = `${today.getMonth() + 1}`.padStart(2, '0');
  const week = `${getWeek(today)}`.padStart(2, '0');

  // TODO 오늘을 기준으로 보여줘야 되는 yyyy년 mm월 ww주 구해서 NewsListPage에 전달.
  return { year, month, week };
};

const getWeek = (dateInstance: Date): number => {
  const date = dateInstance.getDate();
  const year = dateInstance.getFullYear();
  const month = dateInstance.getMonth();

  const firstDate = new Date(year, month);
  const firstWeekLength = 7 - getDayStartMonday(firstDate);

  return firstWeekLength >= date ? 1 : Math.ceil((date - firstWeekLength) / 7) + 1;
};

const getDayStartMonday = (d: Date) => (d.getDay() || 7) - 1;
