import React, { FC } from 'react';
import styled from 'styled-components';

import { CloseButton } from './CloseButton';

interface Props {
  onClose?: () => void;
}

export const Header: FC<Props> = ({ children, onClose }) => (
  <Wrapper>
    <Title>{children}</Title>
    <CloseButton onClick={onClose} />
  </Wrapper>
);

const Wrapper = styled.header`
  padding: 20px 20px 15px 20px;

  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

const Title = styled.h2`
  margin: 0;

  display: flex;
  align-items: center;

  font-size: 17px;
  color: rgb(18, 17, 17);
`;
