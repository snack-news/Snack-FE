import { useMemo } from 'react';

import { IOption } from '~nclient/view/components/DrawerSelector/IOption';
import { eachStartOfWeekOrMonth } from '~nclient/utils/date/eachStartOfWeekInMonth';
import { dateToString } from '~nclient/utils/date/dateToString';

export const useWeeks = () => {
  const weeks = useMemo(
    () =>
      eachStartOfWeekOrMonth()
        .reverse()
        .map(createWeekRange),
    []
  );
  return weeks;
};

const createWeekRange = (date: Date): IOption => ({
  value: `${date.getTime()}`,
  optionLabel: dateToString(date, 'UI'),
  label: dateToString(date, 'UI_SHORT'),
});
