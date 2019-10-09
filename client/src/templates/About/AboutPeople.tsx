import React, { FunctionComponent } from 'react';
import styled from 'styled-components';

import { BothMarginWrapper } from '~client/layouts/BothMarginWrapper';
import { ColListLayout } from '~client/layouts/ColListLayout';

export interface IAboutPeopleProps {
  name: string;
  desc: string;
}

const AboutPeople: FunctionComponent<IAboutPeopleProps> = ({ name, desc }) => (
  <ColListLayout.Repeat interval="8px">
    <BothMarginWrapper>
      <SubTitle>{name}</SubTitle>
    </BothMarginWrapper>
    <BothMarginWrapper>
      <Paragraph>{desc}</Paragraph>
    </BothMarginWrapper>
  </ColListLayout.Repeat>
);

const Paragraph = styled.p`
  font-size: 13px;
  color: #000000;
  margin: 0;
  line-height: 20px;
`;

const SubTitle = styled.h2`
  font-size: 17px;
  font-weight: 600;
  color: #0b66f7;
`;

export default AboutPeople;
