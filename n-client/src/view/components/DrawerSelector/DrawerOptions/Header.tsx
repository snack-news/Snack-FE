import React, { FC } from 'react';
import styled from 'styled-components';

import { exitImg } from '~nclient/resources';

interface Props {
  onClose?: () => void;
}

export const Header: FC<Props> = ({ children, onClose }) => (
  <Wrapper>
    <Title>{children}</Title>
    <CloseButton onClick={onClose}>
      <CloseIcon />
    </CloseButton>
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

const CloseButton = styled.button`
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
