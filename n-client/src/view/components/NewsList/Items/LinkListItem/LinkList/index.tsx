import React, { FC } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

import { Divider } from './Divider';

import { brightBlue } from '~nclient/constants/colors';
import { aboutPath, contactPath, proposePath } from '~nclient/constants/paths';

interface Props {}

export const LinkList: FC<Props> = () => (
  <Wrapper>
    <StyledLink to={aboutPath}>서비스 안내</StyledLink>
    <Divider />
    <StyledLink to={proposePath}>제안하기</StyledLink>
    <Divider />
    <StyledLink to={contactPath}>문의하기</StyledLink>
  </Wrapper>
);

const Wrapper = styled.section`
  display: flex;
  flex-grow: 1;
  flex-direction: row;
  align-items: center;

  margin-bottom: 20px;

  > * {
    margin-right: 8px;
  }
`;

const StyledLink = styled(Link)`
  font-size: 16px;
  font-weight: 500;
  text-align: center;
  color: ${brightBlue};
  text-decoration: none;
`;
