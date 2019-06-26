import React from 'react';
import styled from 'styled-components';

import { ColListLayout, BothMarginWrapper } from 'Layouts/index';

export const TextCard = () => (
  <BothMarginWrapper>
    <ColListLayout.Repeat interval="8px" top="15px" bottom="15px">
      <Title>개발 읽기</Title>
      <Text>바로 링크로 이동합니다.</Text>
    </ColListLayout.Repeat>
  </BothMarginWrapper>
);

const Title = styled.div`
  font-family: SFProDisplay;
  font-size: 17px;
  font-weight: 600;
  color: #121111;
`;

const Text = styled.div`
  font-family: SFProDisplay;
  font-size: 13px;
  color: #595966;
`;
