import React, { FC } from 'react';
import styled from 'styled-components';

import { ContactLinks } from './ContactLinks';

interface Props {}

export const ContactList: FC<Props> = () => (
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
  color: rgb(18, 17, 17);
  margin: 0px 0px 20px 0px;
`;
