import React, { FC } from 'react';
import styled from 'styled-components';

import { Desc } from './Desc';

import { BLACK } from '~src/constants/colors';

interface IProps {}

export const About: FC<IProps> = () => (
  <Wrapper>
    <Title>About SNAK</Title>
    <Desc />
  </Wrapper>
);

const Wrapper = styled.section`
  margin: 40px 20px 60px 20px;
`;

const Title = styled.h2`
  font-size: 21px;
  color: ${BLACK};
  margin: 0px 0px 20px 0px;
`;
