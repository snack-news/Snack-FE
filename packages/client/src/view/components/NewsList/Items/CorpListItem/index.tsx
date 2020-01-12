import React, { FC } from 'react';
import styled from 'styled-components';

import { CorpList } from './CorpList';
import { Header } from './Header';

interface IProps {}

export const CorpListItem: FC<IProps> = () => (
  <Wrapper>
    <Header />
    <CorpList />
  </Wrapper>
);

const Wrapper = styled.section`
  padding-top: 30px;
  padding-bottom: 30px;
`;
