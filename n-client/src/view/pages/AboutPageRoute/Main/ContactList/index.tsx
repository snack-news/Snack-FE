import React, { FC } from 'react';
import styled from 'styled-components';

import { ContactLinks } from './ContactLinks';

import { BLACK } from '~nclient/constants/colors';

interface IProps {}

export const ContactList: FC<IProps> = () => (
  <Wrapper>
    <Title>Social</Title>
    <ContactLinks />
  </Wrapper>
);

const Wrapper = styled.section`
  margin: 0px 20px 0px 20px;
`;

const Title = styled.h2`
  font-size: 21px;
  color: ${BLACK};
  margin: 0px 0px 20px 0px;
`;
