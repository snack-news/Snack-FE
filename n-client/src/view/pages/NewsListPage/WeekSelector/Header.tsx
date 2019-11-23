import React from 'react';
import styled from 'styled-components';

import { Exit } from '~nclient/view/atoms/styles/Icons';

interface Props {}

export const Header: React.FC<Props> = () => {
  return (
    <Wrapper>
      <Title />
      <CloseButton />
    </Wrapper>
  );
};

const Wrapper = styled.header`
  padding: 20px 20px 15px 20px;

  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

const Title = styled.h2.attrs({ children: '조회할 주 선택' })`
  margin: 0;

  display: flex;
  align-items: center;

  font-size: 17px;
  color: rgb(18, 17, 17);
`;

const CloseIcon = styled(Exit)`
  width: 14px;
  height: 14px;
`;

const CloseButton = styled.button.attrs({ children: <CloseIcon /> })`
  display: flex;
  align-items: center;

  background: transparent;
  border-width: 0;
  padding: 0px;
`;
