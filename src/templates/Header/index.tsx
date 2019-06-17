import React, { ReactElement, SFC } from 'react';
import styled from 'styled-components';

import { BothMarginWrapper, RowListLayout } from 'Layouts/index';

import { logoImg, MenuImg } from 'Resources/index';

// Header 컴포넌트
interface HeaderProps {}

export const Header: React.SFC<HeaderProps> = () => {
  return (
    <HeaderLayout>
      {{
        logo: <Logo />,
        menu: <Menu />,
      }}
    </HeaderLayout>
  );
};

export default Header;

// HeaderLayout 컴포넌트
interface HeaderLayoutProps {
  children: {
    logo: ReactElement;
    menu: ReactElement;
  };
}

const HeaderLayout: SFC<HeaderLayoutProps> = ({ children: { logo, menu } }) => {
  return (
    <HeaderLayoutWrapper>
      <RowListLayout.Between>{[logo, menu]}</RowListLayout.Between>
    </HeaderLayoutWrapper>
  );
};

// HeaderLayoutWrapper 컴포넌트
const HeaderLayoutWrapper = styled(BothMarginWrapper)`
  padding-top: 17px;
  padding-bottom: 17px;
  min-height: 54px;
`;

// Logo 컴포넌트
const Logo = styled.img.attrs({ src: logoImg })`
  height: 28px;
`;

// Menu 컴포넌트
const Menu = styled.img.attrs({ src: MenuImg })`
  width: 30px;
`;
