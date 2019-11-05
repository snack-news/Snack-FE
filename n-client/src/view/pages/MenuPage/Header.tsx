import React, { FC } from 'react';

import styled from 'styled-components';

import { brightBlue } from '~nclient/view/atoms/styles/colors';
import { ExitWhite } from '~nclient/view/atoms/styles/Icons';

interface Props {}

export const Header: FC<Props> = () => {
  return (
    <header
      css={`
        background-color: ${brightBlue};
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        padding: 40px;
      `}
    >
      <Title>Menu</Title>
      <CloseButton />
    </header>
  );
};

const Title = styled.h1`
  font-size: 24px;
  font-weight: 600;
  color: rgb(254, 254, 254);
  font-family: 'Noto Sans KR', sans-serif;
  margin: 0px;
`;

const ExitWhiteStyeld = styled(ExitWhite)`
  display: block;
  width: 18px;
  margin: 6px;
`;

const CloseButton = styled.button.attrs({ children: <ExitWhiteStyeld /> })`
  padding: 0;
  border: 0;
  margin: 0;
  background-color: transparent;
`;
