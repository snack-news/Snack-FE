import React, { FC } from 'react';
import styled from 'styled-components';

import { CorpList } from './CorpList';

interface Props {}

export const CorpListItem: FC<Props> = () => {
  return (
    <Wrapper>
      <Header>
        <Title />
        <MoreLink />
      </Header>
      <CorpList />
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

const Title = styled.h2.attrs({ children: '회사별 뉴스 모아보기' })`
  font-size: 17px;
  font-weight: 600;
  color: black;
  font-family: 'Noto Sans KR', sans-serif;
  margin: 0;
`;

const MoreLink = styled.a.attrs({ children: '모두보기', href: '/' })`
  font-size: 13px;
  color: rgb(11, 102, 247);
  text-decoration: none;
`;
