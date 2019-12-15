import React, { useState } from 'react';

import { getWeekOfMonth, format as dateFnsFormat } from 'date-fns';

import { DrawerSelector, Option } from '~nclient/view/components/DrawerSelector';

interface Props {}

export const SelectWeekRange: React.FC<Props> = () => {
  const weeks = getWeekOfMonthList();
  const [week, setWeek] = useState(weeks[0].value);

  return (
    <DrawerSelector
      options={weeks}
      value={week}
      onChange={({ value }) => setWeek(value)}
      header="조회할 주 선택"
      labelStyle={{
        padding: '0px 20px',
        height: '100%',
      }}
    />
  );
};

const getWeekOfMonthList = () => {
  const MIN = new Date(2018, 7, 1).getTime();
  const MAX = new Date().getTime();

  const weekOfMonthList: Option[] = [];

  for (
    let startDateTime = MIN;
    startDateTime <= MAX;
    startDateTime = getNextWeek(new Date(startDateTime), 0, true).getTime() +  1000 * 60 * 60 * 24
  ) {
    weekOfMonthList.push(
      createWeekRange(startDateTime, getNextWeek(new Date(startDateTime), 0, true))
    );
  }

  return weekOfMonthList;
};
// startDateTime=2019-12-09T00:00&endDateTime=2019-12-15T23:59
const createWeekRange = (startDateTime: Date | number, endDateTime: Date | number): Option => {
  const value = JSON.stringify({
    startDateTime: dateToString(startDateTime),
    endDateTime: dateToString(endDateTime),
  });

  return {
    value,
    optionLabel: format(startDateTime, 'yyyy년 MM월 WW주'),
    label: format(startDateTime, 'MM월 WW주'),
  };
};

const getNextWeek = (date: Date, day: number, equalMonth?: boolean): Date => {
  const currentDay = date.getDay();
  const diff = day >= currentDay ? day - currentDay : 7 + day - currentDay;

  const nextWeek = new Date(date.getTime() + 1000 * 60 * 60 * 24 * diff);

  if (!equalMonth) {
    return nextWeek;
  }

  if (date.getMonth() === nextWeek.getMonth()) {
    return nextWeek;
  }

  return getLastDateOfMonth(date);
};

const getLastDateOfMonth = (date: Date): Date => {
  return new Date(date.getFullYear(), date.getMonth() + 1, 0);
};

const dateToString = (date: Date | number) => format(date, 'yyyy-MM-dd[T]hh:mm');

/**
 * 참고: https://date-fns.org/v2.6.0/docs/format
 *
 * 추가 사항
 * week of month
 * W: 1 2 3 4 (주)
 * WW: 01 02 03 04 (주)
 * @param param0
 */
const format: dateFns['format'] = (date, formatStr, options) =>
  dateFnsFormat(date, formatWeekOfMonth(date, formatStr, options), options);

const formatWeekOfMonth: dateFns['format'] = (date, formatStr, options) =>
  formatStr.replace(/W{1,2}/g, match => {
    const w = getWeekOfMonth(date, options);
    return match === 'WW' ? `${w}`.padStart(2, '0') : `${w}`;
  });
