import React from 'react';
import styled from 'styled-components';

import HorizontalDivider from '../HorizontalDivider';

const CompanyBox = () => (
  <CompanyBox.Wrapper>
    <CompanyBox.Logo />
    <CompanyBox.Label>그랩</CompanyBox.Label>
  </CompanyBox.Wrapper>
);
CompanyBox.Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  width: 89px;
  height: 74px;
  border-radius: 5px;
  border: solid 0.5px #d6d6db;
  flex: none;
  margin-right: 10px;
  padding: 12px 0 8px 0;
`;

CompanyBox.Logo = styled.img`
  width: 70.6px;
  height: 27.2px;
  background-color: #009c3d;
`;

CompanyBox.Label = styled.div`
  flex: 1;
  font-family: AppleSDGothicNeo;
  font-size: 12px;
  margin-top: 12px;
  text-align: center;
  color: #595966;
`;

const CompanyListCard = () => (
  <React.Fragment>
    <HorizontalDivider thick />
    <CompanyListCard.Wrapper>
      <CompanyListCard.Header>
        <CompanyListCard.Title />
        <CompanyListCard.MoreLink />
      </CompanyListCard.Header>
      <CompanyListCard.Body>
        <CompanyBox />
        <CompanyBox />
        <CompanyBox />
        <CompanyBox />
        <CompanyBox />
        <CompanyBox />
        <CompanyBox />
        <CompanyBox />
      </CompanyListCard.Body>
    </CompanyListCard.Wrapper>
    <HorizontalDivider thick />
  </React.Fragment>
);

CompanyListCard.Wrapper = styled.div`
  display: flex;
  padding: 15px 20px 10px 20px;
  flex-direction: column;
`;

CompanyListCard.Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-bottom: 5px;
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

CompanyListCard.Body = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  flex-wrap: nowrap;
  overflow: auto;
  padding: 10px 0;
`;

export default CompanyListCard;
