import React, { FunctionComponent } from 'react';

import { ColListLayout } from 'Layouts/index';

import { getWeekDate } from 'Utils';
import useReactRouter from 'use-react-router';
import SelectItem from './SelectItem';

const NOW = new Date();
const nowWeek = getWeekDate(NOW);
const MIN_YEAR = 2019;
const MIN_MONTH = 8;
const MAX_YEAR = parseInt(nowWeek.year, 10);
const MAX_MONTH = parseInt(nowWeek.month, 10);
const MAX_WEEK = parseInt(nowWeek.week, 10);

interface ISelectItemListProps {
  year: string;
  month: string;
  week: string;
  onChange: () => void;
}

const SelectItemList: FunctionComponent<ISelectItemListProps> = ({
  year,
  month,
  week,
  onChange,
}) => {
  const { history } = useReactRouter();

  return (
    <ColListLayout.Repeat top="20px" bottom="20px" interval="31px" style={{ height: '375px' }}>
      {getWeekDateList()
        .reverse()
        .map(weekDate => {
          const label = `${weekDate.year}년 ${weekDate.month}월 ${weekDate.week}주`;
          const selected =
            weekDate.year === year && weekDate.month === month && weekDate.week === week;
          return (
            <SelectItem
              label={label}
              selected={selected}
              key={label}
              onClick={() => {
                if (selected) {
                  return;
                }
                history.push(`/newsList/${weekDate.year}/${weekDate.month}/week/${weekDate.week}`);
                onChange();
              }}
            />
          );
        })}
    </ColListLayout.Repeat>
  );
};

export default SelectItemList;

const getWeekDateList = () => {
  const weekDateList: { year: string; month: string; week: string }[] = [];

  for (let currentYear = MIN_YEAR; currentYear <= MAX_YEAR; currentYear += 1) {
    for (
      let currentMonth = currentYear === MIN_YEAR ? MIN_MONTH : 0;
      (currentYear < MAX_YEAR && currentMonth <= 11) ||
      (currentYear === MAX_YEAR && currentMonth <= MAX_MONTH);
      currentMonth += 1
    ) {
      const CURRENT_MAX_WEEK =
        currentYear === MAX_YEAR && currentMonth === MAX_MONTH
          ? MAX_WEEK
          : getMaxNthWeek(currentYear, currentMonth);
      // eslint-disable-next-line max-depth
      for (let currentWeek = 1; currentWeek <= CURRENT_MAX_WEEK; currentWeek += 1) {
        weekDateList.push({
          year: `${currentYear}`,
          month: `${currentMonth}`.padStart(2, '0'),
          week: `${currentWeek}`.padStart(2, '0'),
        });
      }
    }
  }

  return weekDateList;
};

const getMaxNthWeek = (year: number, month: number) => {
  const firstWeekLength = getFirstWeekLength(year, month);
  const maxDateOfMonth = getMaxDate(year, month);

  return Math.ceil((maxDateOfMonth - firstWeekLength) / 7) + 1;
};

const getFirstWeekLength = (year: number, month: number) => {
  const firstDate = new Date(year, month);
  const firstDay = getDayStartMonday(firstDate);
  const firstWeekLength = 7 - firstDay;

  return firstWeekLength;
};

const getMaxDate = (year: number, month: number) => {
  const lastDate = new Date(year, month + 1, 0);
  const maxDateOfMonth = lastDate.getDate();

  return maxDateOfMonth;
};

const getDayStartMonday = (d: Date) => (d.getDay() || 7) - 1;
