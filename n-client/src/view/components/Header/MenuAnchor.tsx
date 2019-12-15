import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

import { Menu } from '~nclient/view/atoms/styles/Icons';

const MenuStyeld = styled(Menu)`
  display: block;
  width: 18px;
  margin: 6px;
`;

export const MenuAnchor = styled(Link).attrs({
  children: <MenuStyeld />,
  to: '/menu',
})`
  padding: 0;
  border: 0;
  margin: 0;
  background-color: transparent;
`;
