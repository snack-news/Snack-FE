import React, { FC } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

import { corpsPath } from '~nclient/constants/paths';

interface Props {}

export const Header: FC<Props> = () => (
  <Wrapper>
    <Title>회사별 뉴스 모아보기</Title>
    <MoreLink to={corpsPath}>모두보기</MoreLink>
  </Wrapper>
);

const Wrapper = styled.header`
  margin-bottom: 20px;
  margin-right: 20px;
  margin-left: 20px;

  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

const Title = styled.h2`
  font-size: 17px;
  font-weight: 600;
  color: black;
  margin: 0;
`;

const MoreLink = styled(Link)`
  font-size: 13px;
  color: rgb(11, 102, 247);
  text-decoration: none;
`;
