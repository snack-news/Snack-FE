import React, { useState } from 'react';

import { useWeeks } from './useWeeks';

import { DrawerSelector } from '~nclient/view/components/DrawerSelector';

interface Props {}

export const SelectWeekRange: FC<Props> = () => {
  const weeks = useWeeks();
  const [week, setWeek] = useState(weeks[0].value);

  return (
    <DrawerSelector
      options={weeks}
      value={week}
      onClickOption={({ value }) => {
        if (value !== week) setWeek(value);
      }}
      header="조회할 주 선택"
      labelStyle={{
        padding: '0px 20px',
        height: '100%',
      }}
    />
  );
};
