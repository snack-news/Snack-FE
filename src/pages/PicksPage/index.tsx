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
    <TextCard title="개발 읽기" text="바로 링크로 이동합니다." />
    <HorizontalDivider thick />
    <PickNewsList />
    <Footer />
  </Wrapper>
);

export default PicksPage;
