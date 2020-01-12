import React, { FC } from 'react';
import styled from 'styled-components';

import { CONTACT_URL, CONTACT_NAME } from '~src/constants/urls';
import { ABOUT_PATH, ABOUT_NAME, PROPOSE_PATH, PROPOSE_NAME } from '~src/constants/paths';
import { WHITE_THREE } from '~src/constants/colors';

interface IProps {
  className?: string;
}

export const LinkList: FC<IProps> = ({ className }) => (
  <Wrapper className={className}>
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
