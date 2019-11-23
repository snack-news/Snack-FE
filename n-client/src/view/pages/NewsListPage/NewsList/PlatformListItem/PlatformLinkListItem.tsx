import React, { FC } from 'react';
import styled from 'styled-components';

import { PlatformLinkList } from './PlatformLinkList';

interface Props {}

export const PlatformLinkListItem: FC<Props> = () => {
  return (
    <Wrapper>
      <Header>
        <Title />
      </Header>
      <PlatformLinkList />
    </Wrapper>
  );
};

const Wrapper = styled.section`
  padding-top: 30px;
  padding-bottom: 30px;
`;

const Header = styled.header`
  margin-bottom: 20px;
  margin-right: 20px;
  margin-left: 20px;

  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

const Title = styled.h2.attrs({ children: '스낵뉴스를 원하는 플랫폼에서 챙겨보세요' })`
  font-size: 17px;
  font-weight: 600;
  color: black;
  font-family: 'Noto Sans KR', sans-serif;
  margin: 0;
`;
