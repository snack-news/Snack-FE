import React from 'react';
import styled from 'styled-components';

import HorizontalDivider from '../HorizontalDivider';

const ContactCard = () => (
  <React.Fragment>
    <HorizontalDivider thick />
    <ContactCard.Wrapper>
      <ContactCard.Header>
        <ContactCard.Title />
        <ContactCard.MoreLink />
      </ContactCard.Header>
    </ContactCard.Wrapper>
    <HorizontalDivider thick />
  </React.Fragment>
);

ContactCard.Wrapper = styled.div`
  display: flex;
  padding: 15px 0;
  flex-direction: column;
  align-items: center;
`;

ContactCard.Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 20px;
`;

ContactCard.Title = styled.div.attrs({ children: '회사별 뉴스 모아보기' })`
  font-family: SFProDisplay;
  font-size: 17px;
  font-weight: 600;
  color: #000000;
`;

ContactCard.MoreLink = styled.div.attrs({ children: '모두보기' })`
  font-family: AppleSDGothicNeo;
  font-size: 13px;
  color: #0b66f7;
`;

export default ContactCard;
