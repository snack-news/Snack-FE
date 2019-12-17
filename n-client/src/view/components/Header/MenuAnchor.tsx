import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

import { Menu } from '~nclient/view/atoms/styles/Icons';

const MenuStyeld = styled(Menu)`
  display: block;
  width: 16px;
  margin: 6px;
`;

export const MenuAnchor = styled(Link).attrs({
  children: <MenuStyeld />,
  to: '/menu',
})`
  display: flex;
  align-items: center;

  background-color: transparent;
  padding: 0px 20px;
  height: 100%;
`;
