import React from 'react';
import styled from 'styled-components';

import HorizontalDivider from '../HorizontalDivider';

const CompanyListCard = () => (
  <React.Fragment>
    <HorizontalDivider thick />
    <CompanyListCard.Wrapper>
      <CompanyListCard.Header>
        <CompanyListCard.Title />
        <CompanyListCard.MoreLink />
      </CompanyListCard.Header>
    </CompanyListCard.Wrapper>
    <HorizontalDivider thick />
  </React.Fragment>
);

CompanyListCard.Wrapper = styled.div`
  display: flex;
  padding: 15px 0;
  flex-direction: column;
  align-items: center;
`;

CompanyListCard.Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 20px;
`;

CompanyListCard.Title = styled.div.attrs({ children: '회사별 뉴스 모아보기' })`
  font-family: SFProDisplay;
  font-size: 17px;
  font-weight: 600;
  color: #000000;
`;

CompanyListCard.MoreLink = styled.div.attrs({ children: '모두보기' })`
  font-family: AppleSDGothicNeo;
  font-size: 13px;
  color: #0b66f7;
`;

export default CompanyListCard;
