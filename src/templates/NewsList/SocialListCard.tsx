import React, { SFC } from 'react';
import styled from 'styled-components';

import HorizontalDivider from '../HorizontalDivider';

const SocialLinkCard: SFC<{}> = ({ children }) => (
  <SocialLinkCardWrapper>
    <SocialLinkCardLabel>
      {children}
      <br />
      에서 보기
    </SocialLinkCardLabel>
  </SocialLinkCardWrapper>
);

const SocialLinkCardWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  width: 81px;
  height: 75px;
  border-radius: 5px;
  background-color: #33599d;
  margin-right: 10px;
  flex: none;
`;

const SocialLinkCardLabel = styled.div`
  font-family: SFProDisplay;
  font-size: 12px;
  font-weight: 500;
  text-align: center;
  color: #fefefe;
`;

const SocialListCard = () => (
  <React.Fragment>
    <HorizontalDivider thick />
    <SocialListCard.Wrapper>
      <SocialListCard.Header>
        <SocialListCard.Title />
      </SocialListCard.Header>
      <SocialListCard.Body>
        <SocialLinkCard>FaceBook</SocialLinkCard>
        <SocialLinkCard>FaceBook</SocialLinkCard>
        <SocialLinkCard>FaceBook</SocialLinkCard>
        <SocialLinkCard>FaceBook</SocialLinkCard>
        <SocialLinkCard>FaceBook</SocialLinkCard>
        <SocialLinkCard>FaceBook</SocialLinkCard>
        <SocialLinkCard>FaceBook</SocialLinkCard>
        <SocialLinkCard>FaceBook</SocialLinkCard>
        <SocialLinkCard>FaceBook</SocialLinkCard>
        <SocialLinkCard>FaceBook</SocialLinkCard>
      </SocialListCard.Body>
    </SocialListCard.Wrapper>
    <HorizontalDivider thick />
  </React.Fragment>
);

SocialListCard.Wrapper = styled.div`
  display: flex;
  padding: 0 20px;
  flex-direction: column;
`;

SocialListCard.Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 15px 0;
`;

SocialListCard.Title = styled.div.attrs({ children: '스낵뉴스를 원하는 플랫폼에서 챙겨보세요' })`
  font-family: SFProDisplay;
  font-size: 17px;
  font-weight: 600;
  color: #000000;
`;

SocialListCard.Body = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  flex-wrap: nowrap;
  overflow: auto;
  margin: 5px 0 15px 0;
`;

export default SocialListCard;
