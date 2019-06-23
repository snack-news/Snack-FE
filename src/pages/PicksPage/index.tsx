import React from 'react';
import styled from 'styled-components';

import {
  Header,
  Tabs,
  PickCategoryList,
  PickNewsList,
  HorizontalDivider,
  Footer,
  TextCard,
} from 'Templates/index';

const Wrapper = styled.div``;

const PicksPage = () => (
  <Wrapper>
    <Header />
    <HorizontalDivider />
    <Tabs />
    <PickCategoryList />
    <TextCard />
    <HorizontalDivider thick />
    <PickNewsList />
    <Footer />
  </Wrapper>
);

export default PicksPage;
