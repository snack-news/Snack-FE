import React, { FC } from 'react';
import styled from 'styled-components';

import { CONTACT_URL, CONTACT_NAME } from '~src/constants/urls';
import { ABOUT_PATH, ABOUT_NAME } from '~src/constants/paths';
import { WHITE_THREE } from '~src/constants/colors';
import { Link } from '~src/view/components/Link';

interface IProps {
  className?: string;
}

export const LinkList: FC<IProps> = ({ className }) => (
  <Wrapper className={className}>
    <FooterLink to={ABOUT_PATH}>{ABOUT_NAME}</FooterLink>
    <FooterLink to={CONTACT_URL}>{CONTACT_NAME}</FooterLink>
  </Wrapper>
);

const Wrapper = styled.section`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

const FooterLink = styled(Link)`
  font-size: 13px;
  font-weight: 500;
  text-align: center;
  color: ${WHITE_THREE};
  text-decoration: none;
`;
