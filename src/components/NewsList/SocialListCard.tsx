import React from 'react';
import styled from 'styled-components';

import HorizontalDivider from '../HorizontalDivider';

const SocialListCard = () => (
  <React.Fragment>
    <HorizontalDivider thick />
    <SocialListCard.Wrapper>
      <SocialListCard.Header>
        <SocialListCard.Title />
        <SocialListCard.MoreLink />
      </SocialListCard.Header>
    </SocialListCard.Wrapper>
    <HorizontalDivider thick />
  </React.Fragment>
);

SocialListCard.Wrapper = styled.div`
  display: flex;
  padding: 15px 0;
  flex-direction: column;
  align-items: center;
`;

SocialListCard.Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 20px;
`;

SocialListCard.Title = styled.div.attrs({ children: '회사별 뉴스 모아보기' })`
  font-family: SFProDisplay;
  font-size: 17px;
  font-weight: 600;
  color: #000000;
`;

SocialListCard.MoreLink = styled.div.attrs({ children: '모두보기' })`
  font-family: AppleSDGothicNeo;
  font-size: 13px;
  color: #0b66f7;
`;

export default SocialListCard;
