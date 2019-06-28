import React, { ReactNode, FunctionComponent } from 'react';
import styled from 'styled-components';

import { ColListLayout, BothMarginWrapper } from 'Layouts/index';
import { cancelWhite } from 'Resources/index';
import { HorizontalDivider, SocialLinkList } from 'Templates/index';

export const Menu = () => {
  return (
    <MenuLayout>
      {{
        header: <MenuHeader />,
        body: <MenuLinkList />,
        footer: <SocialLinkList imgBgType="white" align="Left" />,
      }}
    </MenuLayout>
  );
};

interface IMenuLayoutProps {
  children: {
    header: ReactNode;
    body: ReactNode;
    footer: ReactNode;
  };
}

const MenuLayout: FunctionComponent<IMenuLayoutProps> = ({
  children: { header, body, footer },
}) => {
  return (
    <ColListLayout.Detail
      items={[
        {
          el: (
            <HeaderWrapper>
              <BothMarginWrapper>{header}</BothMarginWrapper>
            </HeaderWrapper>
          ),
          bottom: '25px',
        },
        { el: <BothMarginWrapper>{body}</BothMarginWrapper>, bottom: '25px' },
        { el: <HorizontalDivider />, bottom: '25px' },
        { el: <BothMarginWrapper depth={2}>{footer}</BothMarginWrapper>, bottom: '25px' },
      ]}
    />
  );
};

const HeaderWrapper = styled.div`
  background-color: #0b66f7;
`;

const MenuHeader = () => {
  return (
    <ColListLayout.Detail
      top="25px"
      bottom="25px"
      items={[
        {
          el: <CloseButton />,
          bottom: '52px',
        },
        {
          el: <MenuTitle />,
        },
      ]}
    />
  );
};

const CloseButton = styled.img.attrs({ src: cancelWhite })`
  width: 30px;
`;

const MenuTitle = styled.div.attrs({ children: 'Menu' })`
  font-family: Gelion;
  font-size: 24px;
  font-weight: 600;
  color: #fefefe;
`;

const MenuLinkList = () => {
  return (
    <ColListLayout.Repeat interval="20px">
      <MenuLink>홈</MenuLink>
      <MenuLink>토픽 모아보기</MenuLink>
      <MenuLink>서비스 안내</MenuLink>
      <MenuLink>공지사항</MenuLink>
      <MenuLink>제안하기</MenuLink>
      <MenuLink>문의하기</MenuLink>
    </ColListLayout.Repeat>
  );
};

const MenuLink = styled.div`
  font-family: SFProDisplay;
  font-size: 24px;
  font-weight: bold;
  font-style: normal;
  font-stretch: normal;
  line-height: normal;
  letter-spacing: normal;
  color: #1e1e25;
`;
