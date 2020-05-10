import React, { FC } from 'react';
import styled from 'styled-components';

interface IProps {}

export const Desc: FC<IProps> = () => (
  <DescWrapper>
    <p>스낵뉴스를 슬랙으로 받아보세요</p>
  </DescWrapper>
);

const DescWrapper = styled.section`
  font-size: 13px;
  line-height: 1.92;
`;
