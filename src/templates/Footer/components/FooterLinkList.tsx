import React from 'react';
import styled from 'styled-components';

import constants from '../../../constants';

const FooterLinkListWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
`;

const FooterLink = styled.div`
  width: 65px;
  font-family: SFProDisplay;
  font-size: 13px;
  font-weight: 500;
  text-align: center;
  color: #fefefe;
`;

const FooterLinkList = () => (
  <FooterLinkListWrapper>
    {constants.footerLinks.map(footerLinkProps => (
      <FooterLink {...footerLinkProps} />
    ))}
  </FooterLinkListWrapper>
);

export default FooterLinkList;
