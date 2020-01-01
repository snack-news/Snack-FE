import React, { FC } from 'react';
import styled from 'styled-components';

import { aboutPath, proposePath, contactPath } from '~nclient/constants/paths';

interface Props {}

export const LinkList: FC<Props> = () => (
  <Wrapper>
    <Link href={aboutPath}>서비스 안내</Link>
    <Link href={proposePath}>제안하기</Link>
    <Link href={contactPath}>문의하기</Link>
  </Wrapper>
);

const Wrapper = styled.section`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;

  margin-bottom: 29px;

  padding-right: 40px;
  padding-left: 40px;
`;

const Link = styled.a`
  font-size: 13px;
  font-weight: 500;
  text-align: center;
  color: rgb(254, 254, 254);
  text-decoration: none;
`;
