import React, { FC } from 'react';
import styled from 'styled-components';

import { PlatformLinkList } from './PlatformLinkList';
import { Header } from './Header';

interface IProps {}

export const PlatformLinkListItem: FC<IProps> = () => (
  <Wrapper>
    <Header />
    <PlatformLinkList />
  </Wrapper>
);

const Wrapper = styled.section`
  padding-top: 30px;
  padding-bottom: 30px;
`;
