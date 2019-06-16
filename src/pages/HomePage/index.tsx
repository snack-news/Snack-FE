import React from 'react';
import styled from 'styled-components';
import Header from '../../templates/Header';
import HorizontalDivider from '../../templates/HorizontalDivider';
import Tabs from '../../templates/Tabs';
import SelectBox from '../../templates/SelectBox';
import NewsList from '../../templates/NewsList';
import Footer from '../../templates/Footer';
import { tabs } from '../../constants';

const Wrapper = styled.div``;

const CompanySelectPage = () => (
  <Wrapper>
    <Header />
    <HorizontalDivider />
    <Tabs tabs={tabs} />
    <HorizontalDivider thick />
    <SelectBox />
    <HorizontalDivider thick />
    <NewsList />
    <Footer />
  </Wrapper>
);

export default CompanySelectPage;
