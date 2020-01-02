import React, { FC } from 'react';
import styled from 'styled-components';

interface Props {}

export const Header: FC<Props> = () => (
  <Wrapper>
    <Title>스낵뉴스를 원하는 플랫폼에서 챙겨보세요</Title>
  </Wrapper>
);

const Wrapper = styled.header`
  margin-bottom: 20px;
  margin-right: 20px;
  margin-left: 20px;

  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

const Title = styled.h2`
  font-size: 17px;
  font-weight: 600;
  color: black;
  margin: 0;
`;
