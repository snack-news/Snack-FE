import React, { FC } from 'react';
import styled from 'styled-components';

import { CloseButton } from './CloseButton';

import { WHITE_THREE, BRIGHT_BLUE } from '~src/constants/colors';

interface IProps {}

export const MenuPageHeader: FC<IProps> = () => (
  <HeaderStyled>
    <Title>Menu</Title>
    <CloseButton />
  </HeaderStyled>
);

const HeaderStyled = styled.header`
  background-color: ${BRIGHT_BLUE};
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 40px;
`;

const Title = styled.h1`
  font-size: 24px;
  font-weight: 600;
  color: ${WHITE_THREE};
  margin: 0px;
`;
