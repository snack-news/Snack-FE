import React, { FunctionComponent } from 'react';
import styled from 'styled-components';

import { BothMarginWrapper, RowListLayout } from 'Layouts/index';

import { getPickCategoryList } from 'Api/index';

// PickCategoryList 컴포넌트
interface IPickCategoryListProps {}

export const PickCategoryList: FunctionComponent<IPickCategoryListProps> = () => {
  const pickCategoryList = getPickCategoryList();

  return (
    <PickCategoryListWrapper>
      <RowListLayout.Repeat interval="15px">
        {pickCategoryList.map(pickCategory => (
          <PickCategoryCard key={pickCategory.key}>{pickCategory.name}</PickCategoryCard>
        ))}
      </RowListLayout.Repeat>
    </PickCategoryListWrapper>
  );
};

const PickCategoryListWrapper = styled(BothMarginWrapper)`
  background-color: #f2f2f5;
  padding-top: 12px;
  padding-bottom: 12px;
`;

const PickCategoryCard = styled.div`
  padding: 10px 16px;
  word-break: keep-all;
  border-radius: 3px;
  border: solid 0.5px rgba(214, 214, 219, 0.5);
  background-color: #fefefe;
`;
