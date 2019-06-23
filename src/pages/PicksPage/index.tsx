import React from 'react';
import styled from 'styled-components';

import { Header, Tabs, PickNewsList, HorizontalDivider, Footer } from 'Templates/index';

const Wrapper = styled.div``;

const PicksPage = () => (
  <Wrapper>
    <Header />
    <HorizontalDivider />
    <Tabs />
    <PickNewsList />
    <Footer />
  </Wrapper>
);

export default PicksPage;
