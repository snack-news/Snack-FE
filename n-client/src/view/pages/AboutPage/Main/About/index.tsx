import React, { FC } from 'react';
import styled from 'styled-components';

import { Desc } from './Desc';

interface Props {}

export const About: FC<Props> = () => (
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
  color: rgb(18, 17, 17);
  margin: 0px 0px 20px 0px;
`;
