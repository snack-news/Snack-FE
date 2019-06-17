import React from 'react';
import styled from 'styled-components';

import { Header, HorizontalDivider, NewsList, Footer } from 'Templates/index';

// import { tabs } from 'Constants';

const Wrapper = styled.div``;

const CompanySelectPage = () => (
  <Wrapper>
    <Header />
    <HorizontalDivider />
    {/* <Tabs tabs={tabs} /> */}
    <HorizontalDivider thick />
    {/* <SelectBox /> */}
    <HorizontalDivider thick />
    <NewsList />
    <Footer />
  </Wrapper>
);

export default CompanySelectPage;
