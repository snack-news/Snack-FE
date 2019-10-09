import React, { FunctionComponent, ReactNode } from 'react';
import styled from 'styled-components';

import { RowListLayout } from '~client/layouts/index';

import { footerSocialList } from '~client/config/index';

interface ISocialLinkListProps {
  imgBgType: 'white' | 'blue';
  align: 'justify' | 'Left';
}

const Layouts = {
  justify: ({ children }: { children: ReactNode[] }) => <RowListLayout.Align type="justify">{children}</RowListLayout.Align>,
  Left: ({ children }: { children: ReactNode[] }) => <RowListLayout.Repeat interval="25px">{children}</RowListLayout.Repeat>,
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
const SocialLinkIcon = styled.img`
  width: 40px;
  height: 40px;
`;
