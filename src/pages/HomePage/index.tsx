import React from 'react';
import styled from 'styled-components';

import { Header, Tabs, SelectBox, HorizontalDivider, NewsList, Footer } from 'Templates/index';

const Wrapper = styled.div``;

const CompanySelectPage = () => (
  <Wrapper>
    <Header />
    <HorizontalDivider />
    <Tabs />
    <HorizontalDivider thick />
    <SelectBox />
    <HorizontalDivider thick />
    <NewsList />
    <Footer />
  </Wrapper>
);

export default CompanySelectPage;
