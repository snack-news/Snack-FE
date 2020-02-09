import React, { FC } from 'react';
import styled from 'styled-components';

import { Link } from '~src/view/components/Link';
import { CORPS_PATH } from '~src/constants/paths';
import { BRIGHT_BLUE } from '~src/constants/colors';

interface IProps {}

export const Header: FC<IProps> = () => (
  <Wrapper>
    <Title>회사별 뉴스 모아보기</Title>
    <MoreLink to={CORPS_PATH}>모두보기</MoreLink>
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
  color: ${BRIGHT_BLUE};
  text-decoration: none;
`;
