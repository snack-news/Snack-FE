import React, { FC } from 'react';
import styled from 'styled-components';

import { Anchors, AnchorType } from './Anchors';

import { WHITE_TWO } from '~nclient/constants/colors';

interface IProps {
  leftAnchor?: AnchorType;
  rightAnchor?: AnchorType;
  title?: string;
}

export const Header: FC<IProps> = ({ leftAnchor = 'HOME', rightAnchor = 'MENU', title }) => (
  <HeaderStyled>
    <Anchors type={leftAnchor} />
    {title}
    <Anchors type={rightAnchor} />
  </HeaderStyled>
);

const HeaderStyled = styled.header`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  height: 66px;
  box-sizing: border-box;

  background-color: ${WHITE_TWO};
`;
