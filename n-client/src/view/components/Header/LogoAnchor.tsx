import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

import { Logo } from '~nclient/view/atoms/styles/Icons';

const LogoStyled = styled(Logo)`
  display: block;
  width: 72px;
`;

export const LogoAnchor = styled(Link).attrs({
  children: <LogoStyled />,
  to: '/',
})``;
