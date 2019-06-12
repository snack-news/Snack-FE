import React from 'react';
import styled from 'styled-components';
import Header from '../../templates/Header';
import HorizontalDivider from '../../templates/HorizontalDivider';
import SubHeader from '../../templates/SubHeader';
import GroupList from '../../templates/GroupList';

import 'normalize.css';
import '../../global.css';

const Wrapper = styled.div``;

const mockGropus = [
  { groupName: '아마존', groupId: '1' },
  { groupName: '쿠팡', groupId: '2' },
  { groupName: '페이스북', groupId: '3' },
  { groupName: '삼성', groupId: '4' },
  { groupName: '테슬라', groupId: '5' },
  { groupName: '이커머스', groupId: '6' },
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
