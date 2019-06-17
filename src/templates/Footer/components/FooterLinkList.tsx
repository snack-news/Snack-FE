import React from 'react';
import styled from 'styled-components';

import { RowListLayout } from 'Layouts/index';
import { footerLinks } from 'Constants';

/* FooterLinkList 컴포넌트 */
export const FooterLinkList = () => (
  <RowListLayout.Between>
    {footerLinks.map(footerLinkProps => (
      <FooterLink {...footerLinkProps} />
    ))}
  </RowListLayout.Between>
);

/* FooterLink 컴포넌트 */
const FooterLink = styled.div`
  width: 65px;
  font-family: SFProDisplay;
  font-size: 13px;
  font-weight: 500;
  text-align: center;
  color: #fefefe;
`;

export default FooterLinkList;
