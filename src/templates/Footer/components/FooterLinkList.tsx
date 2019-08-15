import React from 'react';
import styled from 'styled-components';

import { RowListLayout } from 'Layouts/index';
import { routes } from 'Config/routes';
import RouterLink from 'Components/RouterLink/RouterLink';

const FOOTER_LINKS = [
  { children: '서비스 안내', to: routes.homePage.getLink(), key: '1' },
  { children: '제안하기', to: routes.introduceFormPage.getLink(), key: '2' },
  { children: '문의하기', to: 'https://seanlion.typeform.com/to/p5I7gf', key: '3' },
];

/* FooterLinkList 컴포넌트 */
export const FooterLinkList = () => (
  <RowListLayout.Align type="justify">
    {FOOTER_LINKS.map(footerLinkProps => (
      <FooterLink isExternal={footerLinkProps.key === '3'} {...footerLinkProps} />
    ))}
  </RowListLayout.Align>
);

/* FooterLink 컴포넌트 */
const FooterLink = styled(RouterLink)`
  font-size: 13px;
  font-weight: 500;
  text-align: center;
  color: #fefefe;
  text-decoration: none;
`;

export default FooterLinkList;
