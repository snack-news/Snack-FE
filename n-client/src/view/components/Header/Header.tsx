import React, { FC } from 'react';
import styled from 'styled-components';

import { LogoAnchor } from './LogoAnchor';
import { MenuAnchor } from './MenuAnchor';

import { whiteTwo } from '~nclient/constants/colors';

interface Props {}

export const Header: FC<Props> = () => {
  return (
    <HeaderStyled>
      <LogoAnchor />
      <MenuAnchor />
    </HeaderStyled>
  );
};

const HeaderStyled = styled.header`
  background-color: ${whiteTwo};
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  height: 66px;
  box-sizing: border-box;
`;
