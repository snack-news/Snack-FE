import React from 'react';
import styled from 'styled-components';
import Header from '../../components/Header';
import HorizontalDivider from '../../components/HorizontalDivider';
import SubHeader from '../../components/SubHeader';
import GroupList from '../../components/GroupList';

const Wrapper = styled.div``;

const mockGropus = [
  { name: '아마존', id: '1' },
  { name: '쿠팡', id: '2' },
  { name: '페이스북', id: '3' },
  { name: '삼성', id: '4' },
  { name: '테슬라', id: '5' },
  { name: '이커머스', id: '6' },
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
