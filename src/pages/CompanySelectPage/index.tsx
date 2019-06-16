import React from 'react';
import styled from 'styled-components';
import Header from '../../templates/Header';
import HorizontalDivider from '../../templates/HorizontalDivider';
import SubHeader from '../../templates/SubHeader';
import GroupList from '../../templates/GroupList';

const Wrapper = styled.div``;

const CompanySelectPage = () => (
  <Wrapper>
    <Header />
    <HorizontalDivider />
    <SubHeader />
    <HorizontalDivider />
    <GroupList />
  </Wrapper>
);

export default CompanySelectPage;
