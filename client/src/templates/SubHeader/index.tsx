import React from 'react';
import styled from 'styled-components';

import { BothMarginWrapper, RowListLayout } from '~client/layouts/index';

// import { downarrowFilterImg } from '~client/resources/index';

export const SubHeader = () => (
  <SubHeaderWrapper>
    <RowListLayout.Align type="justify">
      <Title>전체</Title>
      {/* <SortButton /> */}
    </RowListLayout.Align>
  </SubHeaderWrapper>
);

const Title = styled.div`
  font-size: 13px;
  font-weight: 500;
  color: #121111;
`;

// const SortLabel = styled.span`
//   font-size: 11px;
//   font-weight: 500;
//   color: #6d6f72;
//   padding: 0 5px;
// `;

// const SortButton = () => (
//   <div>
//     <SortLabel>가나다 순</SortLabel>
//     <DownArrowFilterImg />
//   </div>
// );

// const DownArrowFilterImg = styled.img.attrs({ src: downarrowFilterImg })`
//   width: 13px;
//   height: 7px;
// `;

const SubHeaderWrapper = styled(BothMarginWrapper)`
  margin: 15px 0;
`;
