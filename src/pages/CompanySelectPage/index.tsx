import React from 'react';
import styled from 'styled-components';
import Header from '../../components/Header';
import HorizontalDivider from '../../components/HorizontalDivider';
import SubHeader from '../../components/SubHeader';
import GroupList from '../../components/GroupList';

const Wrapper = styled.div``;

const mockGropus = [
  { name: '아마존' },
  { name: '쿠팡' },
  { name: '페이스북' },
  { name: '삼성' },
  { name: '테슬라' },
  { name: '이커머스' },
];

const CompanySelectPage = () => (
  <Wrapper>
    <Header />
    <HorizontalDivider />
    <SubHeader />
    <HorizontalDivider />
    <GroupList groups={mockGropus} />
  </Wrapper>
);

export default CompanySelectPage;
