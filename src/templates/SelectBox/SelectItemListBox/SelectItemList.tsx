import React from 'react';

import { ColListLayout } from 'Layouts/index';

import SelectItem from './SelectItem';

const SelectItemList = () => {
  return (
    <ColListLayout.Repeat top="20px" bottom="20px" interval="31px" style={{ height: '375px' }}>
      <SelectItem label="2019년 1월 2주" selected />
      <SelectItem label="2019년 1월 2주" />
      <SelectItem label="2019년 1월 2주" />
      <SelectItem label="2019년 1월 2주" />
      <SelectItem label="2019년 1월 2주" />
      <SelectItem label="2019년 1월 2주" />
      <SelectItem label="2019년 1월 2주" />
      <SelectItem label="2019년 1월 2주" />
      <SelectItem label="2019년 1월 2주" />
      <SelectItem label="2019년 1월 2주" />
      <SelectItem label="2019년 1월 2주" />
      <SelectItem label="2019년 1월 2주" />
      <SelectItem label="2019년 1월 2주" />
      <SelectItem label="2019년 1월 2주" />
      <SelectItem label="2019년 1월 2주" />
      <SelectItem label="2019년 1월 2주" />
      <SelectItem label="2019년 1월 2주" />
      <SelectItem label="2019년 1월 2주" />
      <SelectItem label="2019년 1월 2주" />
      <SelectItem label="2019년 1월 2주" />
      <SelectItem label="2019년 1월 2주" />
      <SelectItem label="2019년 1월 2주" />
      <SelectItem label="2019년 1월 2주" />
      <SelectItem label="2019년 1월 2주" />
      <SelectItem label="2019년 1월 2주" />
      <SelectItem label="2019년 1월 2주" />
    </ColListLayout.Repeat>
  );
};

export default SelectItemList;
