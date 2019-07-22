import React from 'react';
import styled from 'styled-components';

import { RowListLayout } from 'Layouts/index';
import { Link } from 'react-router-dom';
import { routes } from 'Config/routes';

const FOOTER_LINKS = [
  { children: '서비스 안내', to: routes.homePage, key: '1' },
  { children: '제안하기', to: routes.introduceFormPage, key: '2' },
  { children: '문의하기', to: routes.homePage, key: '3' },
];

/* FooterLinkList 컴포넌트 */
export const FooterLinkList = () => (
  <RowListLayout.Align type="justify">
    {FOOTER_LINKS.map(footerLinkProps => (
      <FooterLink {...footerLinkProps} />
    ))}
  </RowListLayout.Align>
);

/* FooterLink 컴포넌트 */
const FooterLink = styled(Link)`
  font-size: 13px;
  font-weight: 500;
  text-align: center;
  color: #fefefe;
  text-decoration: none;
`;

export default FooterLinkList;
