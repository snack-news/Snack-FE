import React, { FC } from 'react';
import styled from 'styled-components';

import { LogoAnchor } from './LogoAnchor';
import { MenuAnchor } from './MenuAnchor';

import { whiteTwo } from '~nclient/view/atoms/styles/colors';
import { HorizontalDivider } from '~nclient/view/atoms/Figures/HorizontalDivider';

interface Props {}

export const Header: FC<Props> = () => {
  return (
    <>
      <HeaderStyled>
        <LogoAnchor />
        <MenuAnchor />
      </HeaderStyled>
      <HorizontalDivider />
    </>
  );
};

const HeaderStyled = styled.header`
  background-color: ${whiteTwo};
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 16px 20px;
`;
