import React, { useState } from 'react';

import { DrawerSelector } from '~nclient/view/components/DrawerSelector';

interface Props {}

export const SelectWeekRange: React.FC<Props> = () => {
  const [week, setWeek] = useState('2019년 01월 01주');
  return (
    <DrawerSelector
      options={weeks}
      value={week}
      onChange={({ value }) => setWeek(value)}
      header="조회할 주 선택"
    />
  );
};

const weeks = [
  { value: '2019년 01월 01주', optionLabel: '2019년 01월 01주', label: '01월 01주' },
  { value: '2019년 01월 02주', optionLabel: '2019년 01월 02주', label: '01월 02주' },
  { value: '2019년 01월 03주', optionLabel: '2019년 01월 03주', label: '01월 03주' },
  { value: '2019년 01월 04주', optionLabel: '2019년 01월 04주', label: '01월 04주' },
  { value: '2019년 01월 05주', optionLabel: '2019년 01월 05주', label: '01월 05주' },
  { value: '2019년 01월 06주', optionLabel: '2019년 01월 06주', label: '01월 06주' },
  { value: '2019년 01월 07주', optionLabel: '2019년 01월 07주', label: '01월 07주' },
  { value: '2019년 01월 08주', optionLabel: '2019년 01월 08주', label: '01월 08주' },
  { value: '2019년 01월 09주', optionLabel: '2019년 01월 09주', label: '01월 09주' },
  { value: '2019년 01월 10주', optionLabel: '2019년 01월 10주', label: '01월 10주' },
];
