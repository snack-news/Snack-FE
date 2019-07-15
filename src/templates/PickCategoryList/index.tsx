import React, { FunctionComponent } from 'react';
import styled, { css } from 'styled-components';

import { BothMarginWrapper, RowListLayout } from 'Layouts/index';

import { getPickCategoryList } from 'Api/index';

// PickCategoryList 컴포넌트
interface IPickCategoryListProps {
  selectCategoryKey: string;
}

export const PickCategoryList: FunctionComponent<IPickCategoryListProps> = ({
  selectCategoryKey,
}) => {
  const pickCategoryList = getPickCategoryList();

  return (
    <PickCategoryListWrapper>
      <RowListLayout.Repeat interval="15px">
        {pickCategoryList.map(({ key, name }) => (
          <PickCategoryCard key={key} select={selectCategoryKey === key}>
            {name}
          </PickCategoryCard>
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

interface IPickCategoryCardProps {
  select?: boolean;
}

const PickCategoryCard = styled.div<IPickCategoryCardProps>`
  padding: 10px 16px;
  word-break: keep-all;
  border-radius: 3px;
  ${({ select }) => {
    if (select) {
      return css`
        color: #fefefe;
        background-color: #0b66f7;
      `;
    }

    return css`
      border: solid 0.5px rgba(214, 214, 219, 0.5);
      background-color: #fefefe;
    `;
  }}
`;
