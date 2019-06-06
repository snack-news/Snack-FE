import React from 'react';
import styled from 'styled-components';
import Header from '../../components/Header';
import HorizontalDivider from '../../components/HorizontalDivider';
import Tabs from '../../components/Tabs';
// import SelectBox from '../../components/SelectBox';
import Footer from '../../components/Footer';
import DefaultProps from '../../constants/DefaultProps';

const Wrapper = styled.div``;

const CompanySelectPage = () => (
  <Wrapper>
    <Header />
    <HorizontalDivider />
    <Tabs {...DefaultProps.tabs} />
    <HorizontalDivider thick />
    {/* <SelectBox /> */}
    <HorizontalDivider thick />
    <Footer />
  </Wrapper>
);

export default CompanySelectPage;
