import React, { FC } from 'react';
import styled from 'styled-components';

import { CorpList } from './CorpList';
import { Header } from './Header';

interface Props {}

export const CorpListItem: FC<Props> = () => (
  <Wrapper>
    <Header />
    <CorpList />
  </Wrapper>
);

const Wrapper = styled.section`
  padding-top: 30px;
  padding-bottom: 30px;
`;
