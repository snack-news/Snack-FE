import React, { FC } from 'react';
import styled from 'styled-components';

import { CloseButton } from './CloseButton';

import { brightBlue } from '~nclient/constants/colors';

interface Props {}

export const MenuPageHeader: FC<Props> = () => (
  <HeaderStyled>
    <Title>Menu</Title>
    <CloseButton />
  </HeaderStyled>
);

const HeaderStyled = styled.header`
  background-color: ${brightBlue};
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 40px;
`;

const Title = styled.h1`
  font-size: 24px;
  font-weight: 600;
  color: rgb(254, 254, 254);
  font-family: 'Noto Sans KR', sans-serif;
  margin: 0px;
`;
