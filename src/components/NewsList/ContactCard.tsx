import React, { Fragment } from 'react';
import styled from 'styled-components';

import HorizontalDivider from '../HorizontalDivider';

const ContactCard = () => (
  <Fragment>
    <HorizontalDivider thick />
    <ContactCard.Wrapper>
      <ContactCard.Links />
      <ContactCard.Copyright />
    </ContactCard.Wrapper>
    <HorizontalDivider thick />
  </Fragment>
);

ContactCard.Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: 22px 20px 30px 20px;
`;

ContactCard.LinksWrapper = styled.div`
  display: flex;
  margin-bottom: 20px;
`;

ContactCard.Link = styled.div`
  font-family: SFProDisplay;
  font-size: 16px;
  font-weight: 500;
  text-align: center;
  color: #0b66f7;
`;

ContactCard.Links = () => (
  <ContactCard.LinksWrapper>
    <ContactCard.Link>서비스 안내</ContactCard.Link>
    <ContactCard.LinkDivider />
    <ContactCard.Link>제안하기</ContactCard.Link>
    <ContactCard.LinkDivider />
    <ContactCard.Link>문의하기</ContactCard.Link>
  </ContactCard.LinksWrapper>
);

ContactCard.LinkDivider = styled.div`
  width: 0.5px;
  height: 17px;
  background-color: #93939f;
  margin: 0 8px;
`;

ContactCard.Copyright = styled.span.attrs({ children: '© 2019 Snack Project' })`
  font-family: SFProDisplay;
  font-size: 12px;
  color: #93939f;
`;

export default ContactCard;
