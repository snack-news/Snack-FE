import React from 'react';
import styled from 'styled-components';

import { Logo } from '~nclient/view/atoms/styles/Icons';

const LogoStyled = styled(Logo)`
  display: block;
  width: 72px;
`;

export const LogoAnchor = styled.button.attrs({ children: <LogoStyled /> })`
  padding: 0;
  border: 0;
  margin: 0;
  background-color: transparent;
`;
