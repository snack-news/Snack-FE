import React, { FC } from 'react';
import styled from 'styled-components';

import { LinkList } from './LinkList';
import { ContactList } from './ContactList';
import { Logo } from './Logo';

interface Props {}

export const Footer: FC<Props> = () => (
  <Wrapper>
    <LinkList />
    <ContactList />
    <Logo />
  </Wrapper>
);

const Wrapper = styled.footer`
  display: flex;
  flex-grow: 1;
  padding-top: 40px;
  padding-bottom: 32px;
  flex-direction: column;

  max-height: 220px;
  box-sizing: border-box;

  box-shadow: rgba(11, 102, 247, 0.4) 0px -1px 3px 0px;
  background-color: rgb(11, 102, 247);
`;
