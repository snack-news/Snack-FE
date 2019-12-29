import React, { FC } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

import { logoImg } from '~nclient/resources';

export const LogoAnchor: FC = () => (
  <StyledLink to="/">
    <LogoIcon />
  </StyledLink>
);

const StyledLink = styled(Link)`
  display: flex;
  align-items: center;

  padding: 0px 20px;
  height: 100%;
`;

const LogoIcon = styled.img.attrs({ src: logoImg })`
  display: block;
  height: 20px;
`;
