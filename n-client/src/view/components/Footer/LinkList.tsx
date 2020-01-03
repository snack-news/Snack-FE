import React, { FC } from 'react';
import styled from 'styled-components';

import { CONTACT_URL, CONTACT_NAME } from '~nclient/constants/urls';
import { ABOUT_PATH, ABOUT_NAME, PROPOSE_PATH, PROPOSE_NAME } from '~nclient/constants/paths';
import { WHITE_THREE } from '~nclient/constants/colors';

interface IProps {}

export const LinkList: FC<IProps> = () => (
  <Wrapper>
    <Link href={ABOUT_PATH}>{ABOUT_NAME}</Link>
    <Link href={PROPOSE_PATH}>{PROPOSE_NAME}</Link>
    <Link href={CONTACT_URL}>{CONTACT_NAME}</Link>
  </Wrapper>
);

const Wrapper = styled.section`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

const Link = styled.a`
  font-size: 13px;
  font-weight: 500;
  text-align: center;
  color: ${WHITE_THREE};
  text-decoration: none;
`;
