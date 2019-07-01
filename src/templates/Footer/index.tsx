import React, { FunctionComponent, ReactNode } from 'react';
import styled from 'styled-components';

import { BothMarginWrapper, ColListLayout } from 'Layouts/index';
import { SocialLinkList } from 'Templates/index';
import { FooterLinkList, Copyright } from './components';

/* Footer 컴포넌트 */
export const Footer = () => (
  <FooterStyleWrapper>
    <FooterLayout>
      {{
        linkList: <FooterLinkList />,
        socialList: <SocialLinkList imgBgType="blue" align="JustifyAlign" />,
        copyright: <Copyright />,
      }}
    </FooterLayout>
  </FooterStyleWrapper>
);

/* FooterStyleWrapper 컴포넌트 */
const FooterStyleWrapper = styled.div`
  box-shadow: 0 -1px 3px 0 rgba(11, 102, 247, 0.4);
  background-color: #0b66f7;
`;

/* FooterLayout 컴포넌트 */
interface IFooterLayoutProps {
  children: {
    linkList: ReactNode;
    socialList: ReactNode;
    copyright: ReactNode;
  };
}

const FooterLayout: FunctionComponent<IFooterLayoutProps> = ({ children }) => (
  <ColListLayout.Detail
    top="40px"
    bottom="32px"
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
      },
    ]}
  />
);
