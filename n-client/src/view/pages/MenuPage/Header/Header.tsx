import React, { FC } from 'react';
import styled from 'styled-components';

import { CloseButton } from './CloseButton';
import { Title } from './Title';

import { brightBlue } from '~nclient/view/atoms/styles/colors';

interface Props {}

export const Header: FC<Props> = () => {
  return (
    <HeaderStyled>
      <Title />
      <CloseButton />
    </HeaderStyled>
  );
};

const HeaderStyled = styled.header`
  background-color: ${brightBlue};
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 40px;
`;
