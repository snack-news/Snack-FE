import React from 'react';
import styled from 'styled-components';

import { RowListLayout } from 'Layouts/index';
import { footerLinks } from 'Config/index';

/* FooterLinkList 컴포넌트 */
export const FooterLinkList = () => (
  <RowListLayout.Align type="justify">
    {footerLinks.map(footerLinkProps => (
      <FooterLink {...footerLinkProps} />
    ))}
  </RowListLayout.Align>
);

/* FooterLink 컴포넌트 */
const FooterLink = styled.a`
  width: 65px;
  font-family: SFProDisplay;
  font-size: 13px;
  font-weight: 500;
  text-align: center;
  color: #fefefe;
  text-decoration: none;
`;

export default FooterLinkList;
