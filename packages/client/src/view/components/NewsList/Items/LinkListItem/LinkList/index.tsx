import React, { FC } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

import { Divider } from './Divider';

import { BRIGHT_BLUE } from '~src/constants/colors';
import { ABOUT_PATH, ABOUT_NAME } from '~src/constants/paths';
import { CONTACT_URL, CONTACT_NAME } from '~src/constants/urls';

interface IProps {}

export const LinkList: FC<IProps> = () => (
  <Wrapper>
    <StyledLink to={ABOUT_PATH}>{ABOUT_NAME}</StyledLink>
    <Divider />
    <StyledLink to={CONTACT_URL}>{CONTACT_NAME}</StyledLink>
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
  color: ${BRIGHT_BLUE};
  text-decoration: none;
`;
