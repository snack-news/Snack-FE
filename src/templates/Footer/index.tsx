import React, { SFC, ReactNode } from 'react';
import styled from 'styled-components';

import BothMarginWrapper from '../../layouts/BothMarginWrapper';
import ColListLayout from '../../layouts/ColListLayout';
import RowListLayout from '../../layouts/RowListLayout';

import { footerLinks, socialList } from '../../constants';

import { LogoWhiteFooterImg } from '../../resources';

/* Footer 컴포넌트 */
const Footer = () => (
  <FooterStyleWrapper>
    <FooterLayout>
      {{
        linkList: <FooterLinkList />,
        socialList: <SocialIconList />,
        copyright: <Copyright />,
      }}
    </FooterLayout>
  </FooterStyleWrapper>
);

export default Footer;

/* FooterStyleWrapper 컴포넌트 */
const FooterStyleWrapper = styled.div`
  box-shadow: 0 -1px 3px 0 rgba(11, 102, 247, 0.4);
  background-color: #0b66f7;
`;

/* FooterLayout 컴포넌트 */
interface FooterLayoutProps {
  children: {
    linkList: ReactNode;
    socialList: ReactNode;
    copyright: ReactNode;
  };
}

const FooterLayout: SFC<FooterLayoutProps> = ({ children }) => (
  <ColListLayout.Detail
    top="40px"
    items={[
      {
        el: <BothMarginWrapper depth={2}>{children.linkList}</BothMarginWrapper>,
        bottom: '29px',
      },
      {
        el: <BothMarginWrapper depth={2}>{children.socialList}</BothMarginWrapper>,
        bottom: '42px',
      },
      {
        el: children.copyright,
        bottom: '32px',
      },
    ]}
  />
);

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

/* SocialIconList 컴포넌트 */
export const SocialIconList = () => (
  <RowListLayout.Between>
    {socialList.map(socialIconProps => (
      <SocialIcon {...socialIconProps} />
    ))}
  </RowListLayout.Between>
);

/* SocialIcon 컴포넌트 */
const SocialIcon = styled.img``;

/* Copyright 컴포넌트 */
export const Copyright = styled.img.attrs({ src: LogoWhiteFooterImg })`
  display: block;
  margin: 0 auto;
`;
