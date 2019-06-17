import React from 'react';
import styled from 'styled-components';

import { Header, HorizontalDivider, CompanyList } from 'Templates/index';

const Wrapper = styled.div``;

const CompanySelectPage = () => (
  <Wrapper>
    <Header />
    <HorizontalDivider />
    {/* <SubHeader /> */}
    <HorizontalDivider />
    <CompanyList />
  </Wrapper>
);

export default CompanySelectPage;
