import React, { ReactElement, SFC } from 'react';
import styled from 'styled-components';

import { BothMarginWrapper, RowListLayout } from 'Layouts/index';

import { logoImg, MenuImg, backBlueArrowImg } from 'Resources/index';

// Header 컴포넌트
interface IHeaderProps {
  title?: string;
}

const Header: React.SFC<IHeaderProps> = ({ title }) => {
  return (
    <HeaderLayout>
      {{
        logo: <Logo />,
        menu: <Menu />,
        backArrow: <BackArrow />,
        title,
      }}
    </HeaderLayout>
  );
};

export default Header;

// HeaderLayout 컴포넌트
interface IHeaderLayoutProps {
  children: {
    logo: ReactElement;
    menu: ReactElement;
    backArrow: ReactElement;
    title?: string;
  };
}

const HeaderLayout: SFC<IHeaderLayoutProps> = ({ children: { logo, menu, backArrow, title } }) => {
  if (title) {
    return (
      <HeaderLayoutWrapper>
        <RowListLayout.Between>
          {backArrow}
          {title}
          {menu}
        </RowListLayout.Between>
      </HeaderLayoutWrapper>
    );
  }

  return (
    <HeaderLayoutWrapper>
      <RowListLayout.Between>
        {logo}
        {menu}
      </RowListLayout.Between>
    </HeaderLayoutWrapper>
  );
};

// HeaderLayoutWrapper 컴포넌트
const HeaderLayoutWrapper = styled(BothMarginWrapper)`
  padding-top: 17px;
  padding-bottom: 17px;
  min-height: 54px;
`;

// Back 컴포넌트
const BackArrow = styled.img.attrs({ src: backBlueArrowImg })`
  height: 22px;
`;

// Logo 컴포넌트
const Logo = styled.img.attrs({ src: logoImg })`
  height: 28px;
`;

// Menu 컴포넌트
const Menu = styled.img.attrs({ src: MenuImg })`
  width: 30px;
`;
