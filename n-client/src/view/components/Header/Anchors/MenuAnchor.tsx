import React, { FC } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

import { MenuImg } from '~nclient/resources';

export const MenuAnchor: FC = () => (
  <StyledLink to="/menu">
    <MenuIcon />
  </StyledLink>
);

const StyledLink = styled(Link)`
  display: flex;
  align-items: center;

  padding: 0px 20px;
  height: 100%;
`;

const MenuIcon = styled.img.attrs({ src: MenuImg })`
  display: block;
  width: 16px;
  margin: 6px;
`;
