import React from 'react';

import styled from 'styled-components';

import { ExitWhite } from '~nclient/view/atoms/styles/Icons';

const ExitWhiteStyeld = styled(ExitWhite)`
  display: block;
  width: 18px;
  margin: 6px;
`;

export const CloseButton = styled.button.attrs({
  children: <ExitWhiteStyeld />,
})`
  padding: 0;
  border: 0;
  margin: 0;
  background-color: transparent;
`;
