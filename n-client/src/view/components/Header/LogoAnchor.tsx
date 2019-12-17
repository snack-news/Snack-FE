import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

import { Logo } from '~nclient/view/atoms/styles/Icons';

const LogoStyled = styled(Logo)`
  display: block;
  height: 20px;
`;

export const LogoAnchor = styled(Link).attrs({
  children: <LogoStyled />,
  to: '/',
})`
  display: flex;
  align-items: center;

  padding: 0px 20px;
  height: 100%;
`;
