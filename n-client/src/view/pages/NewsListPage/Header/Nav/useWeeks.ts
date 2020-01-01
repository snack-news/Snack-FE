import { useMemo } from 'react';

import { getEndDateTime } from '../../getEndDateTime';

import { format, getDateListOfWeekDay } from '~nclient/utils/date';
import { Option } from '~nclient/view/components/DrawerSelector/Option';
import { START_WEEK_DAY } from '~nclient/constants/app';

export const useWeeks = () => {
  const weeks = useMemo(() => startDateList().map(createWeekRange), []);
  return weeks;
};

const startDateList = () => {
  const NOW = new Date();
  const MIN = new Date(2018, 7, 1);
  const MAX = getEndDateTime(NOW);

  return getDateListOfWeekDay(MIN, MAX, START_WEEK_DAY, true).reverse();
};

const createWeekRange = (date: Date): Option => ({
  value: `${date.getTime()}`,
  optionLabel: format(date, 'yyyy년 MM월 WW주'),
  label: format(date, 'MM월 WW주'),
});
