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

export const PicksPage = () => (
  <Wrapper>
    <Header />
    <HorizontalDivider />
    <Tabs />
    <PickCategoryList selectCategoryKey="1" />
    <TextCard title="개발에 관련된 아티클 모음입니다." text="바로 링크로 이동합니다." />
    <HorizontalDivider thick />
    <PickNewsList />
    <Footer />
  </Wrapper>
);
