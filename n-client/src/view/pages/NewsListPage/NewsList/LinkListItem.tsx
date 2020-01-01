import React, { FC } from 'react';
import styled from 'styled-components';

import { coolGrey, brightBlue } from '~nclient/constants/colors';

interface Props {}

// TODO 링크 상수 정리
// TODO 문의하기 페이지 없음

export const LinkListItem: FC<Props> = () => (
  <Wrapper>
    <LinkList>
      <Link href="/about">서비스 안내</Link>
      <Divider />
      <Link href="/contact">제안하기</Link>
      {/* <Divider /> */}
      {/* <Link href="/">문의하기</Link> */}
    </LinkList>
    <Copyright />
  </Wrapper>
);

const Wrapper = styled.section`
  padding-top: 30px;
  padding-bottom: 30px;
  padding-right: 20px;
  padding-left: 20px;
`;

const LinkList = styled.section`
  display: flex;
  flex-grow: 1;
  flex-direction: row;
  align-items: center;

  margin-bottom: 20px;

  > * {
    margin-right: 8px;
  }
`;

const Link = styled.a`
  font-size: 16px;
  font-weight: 500;
  text-align: center;
  color: ${brightBlue};
  text-decoration: none;
`;

const Divider = styled.div`
  width: 1px;
  height: 17px;
  background-color: ${coolGrey};
`;

const Copyright = styled.span.attrs({ children: '© 2019 Snack Project' })`
  font-size: 12px;
  color: ${coolGrey};
`;
