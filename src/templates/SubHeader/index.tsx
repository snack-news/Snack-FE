import React from 'react';
import styled from 'styled-components';

import { BothMarginWrapper, RowListLayout } from 'Layouts/index';

import { downarrowFilterImg } from 'Resources/index';

export const SubHeader = () => (
  <SubHeaderWrapper>
    <RowListLayout.Between>
      <Title>전체</Title>
      <SortButton />
    </RowListLayout.Between>
  </SubHeaderWrapper>
);

const Title = styled.div`
  font-family: AppleSDGothicNeo;
  font-size: 13px;
  font-weight: 500;
  color: #121111;
`;

const SortLabel = styled.span`
  font-family: AppleSDGothicNeo;
  font-size: 11px;
  font-weight: 500;
  color: #6d6f72;
  padding: 0 5px;
`;

const SortButton = () => (
  <div>
    <SortLabel>가나다 순</SortLabel>
    <img src={downarrowFilterImg} alt="sort" />
  </div>
);

const SubHeaderWrapper = styled(BothMarginWrapper)`
  margin: 15px 0;
`;
