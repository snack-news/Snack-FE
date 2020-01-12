import React, { FC } from 'react';
import styled from 'styled-components';

import { LinkList } from './LinkList';
import { ContactList } from './ContactList';
import { Logo } from './Logo';

import { BRIGHT_BLUE } from '~src/constants/colors';

interface IProps {}

export const Footer: FC<IProps> = () => (
  <Wrapper>
    <StyledLinkList />
    <StyledContactList />
    <StyledLogo />
  </Wrapper>
);

const Wrapper = styled.footer`
  display: flex;
  flex-grow: 1;
  flex-direction: column;

  max-height: 220px;
  padding: 40px 0px 32px 0px;

  box-shadow: rgba(11, 102, 247, 0.4) 0px -1px 3px 0px;
  background-color: ${BRIGHT_BLUE};
`;

const StyledLinkList = styled(LinkList)`
  padding: 0px 40px 29px 40px;
`;

const StyledContactList = styled(ContactList)`
  padding: 0px 40px 42px 40px;
`;

const StyledLogo = styled(Logo)`
  padding: 0px 0px 0px 0px;
`;
