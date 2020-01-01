import React, { FC } from 'react';
import styled from 'styled-components';

import { exitImg } from '~nclient/resources';

interface Props {
  onClick?: () => void;
}

export const CloseButton: FC<Props> = ({ onClick }) => (
  <StyledButton onClick={onClick}>
    <CloseIcon />
  </StyledButton>
);

const StyledButton = styled.button`
  display: flex;
  align-items: center;

  background: transparent;
  border-width: 0;
  padding: 0px;
`;

const CloseIcon = styled.img.attrs({ src: exitImg })`
  width: 14px;
  height: 14px;
`;
