import React, { FC } from 'react';
import styled from 'styled-components';

import { CloseButton } from './CloseButton';

import { BLACK } from '~nclient/constants/colors';

interface IProps {
  onClose?: () => void;
}

export const Header: FC<IProps> = ({ children, onClose }) => (
  <Wrapper>
    <Title>{children}</Title>
    <CloseButton onClick={onClose} />
  </Wrapper>
);

const Wrapper = styled.header`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

const Title = styled.h2`
  padding: 20px 20px 15px 20px;

  display: flex;
  align-items: center;

  margin: 0;
  font-size: 17px;
  color: ${BLACK};
`;
