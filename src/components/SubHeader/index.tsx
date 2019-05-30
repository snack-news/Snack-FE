import React from 'react';
import styled from 'styled-components';
import BarWrapper from '../BarWrapper/index';
import downarrowFilterImg from '../../resources/icon/downarrow_filter.png';

const Title = styled.div`
  font-family: AppleSDGothicNeo;
  font-size: 13px;
  font-weight: 500;
  color: #121111;
`;

const SortLabel = styled.span`
  font-family: AppleSDGothicNeo;
  font-size: 11px;
  font-weight: 500;
  color: #6d6f72;
  padding: 0 5px;
`;

const SortButton = () => (
  <div>
    <SortLabel>가나다 순</SortLabel>
    <img src={downarrowFilterImg} alt="sort" />
  </div>
);

const SubHeader = () => (
  <BarWrapper>
    <Title>전체</Title>
    <SortButton />
  </BarWrapper>
);

export default SubHeader;
