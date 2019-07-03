import React, { FunctionComponent, ReactNode } from 'react';
import styled from 'styled-components';

import { RowListLayout } from 'Layouts/index';

import { footerSocialList } from 'Config/index';

interface ISocialLinkListProps {
  imgBgType: 'white' | 'blue';
  align: 'JustifyAlign' | 'Left';
}

const Layouts = {
  JustifyAlign: RowListLayout.JustifyAlign,
  Left: ({ children }: { children: ReactNode[] }) => (
    <RowListLayout.Repeat interval="10px">{children}</RowListLayout.Repeat>
  ),
};

/* SocialLinkList 컴포넌트 */
export const SocialLinkList: FunctionComponent<ISocialLinkListProps> = ({ imgBgType, align }) => {
  const Layout = Layouts[align];

  return (
    <Layout>
      {footerSocialList.map(({ img, link, key }) => (
        <a href={link} key={key}>
          <SocialLinkIcon src={img[imgBgType]} />
        </a>
      ))}
    </Layout>
  );
};

/* SocialLinkIcon 컴포넌트 */
const SocialLinkIcon = styled.img``;
