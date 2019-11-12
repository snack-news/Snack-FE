import React from 'react';
import styled from 'styled-components';

import { Logo } from '~nclient/view/atoms/styles/Icons';

const LogoStyled = styled(Logo)`
  display: block;
  width: 72px;
`;

export const LogoAnchor = styled.a.attrs({
  children: <LogoStyled />,
  href: '/',
})``;
