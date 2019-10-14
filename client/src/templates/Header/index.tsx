import React, { ReactElement, FunctionComponent } from 'react';
import styled from 'styled-components';

import { BothMarginWrapper, RowListLayout } from '~client/layouts/index';

import { logoImg, MenuImg, backBlueArrowImg } from '~client/resources/index';
import { Link } from 'react-router-dom';
import { routes } from '~client/config/routes';
import useReactRouter from 'use-react-router';

// Header 컴포넌트
interface IHeaderProps {
  title?: string;
}

export const Header: FunctionComponent<IHeaderProps> = ({ title }) => {
  const { history } = useReactRouter();
  return (
    <HeaderLayout>
      {{
        logo: (
          <Logo
            onClick={() => {
              history.push('/');
            }}
          />
        ),
        menu: (
          <Link to={routes.menuPage.getLink()}>
            <Menu />
          </Link>
        ),
        backArrow: (
          <BackArrow
            onClick={() => {
              history.goBack();
            }}
          />
        ),
        title,
      }}
    </HeaderLayout>
  );
};

// HeaderLayout 컴포넌트
interface IHeaderLayoutProps {
  children: {
    logo: ReactElement;
    menu: ReactElement;
    backArrow: ReactElement;
    title?: string;
  };
}

const HeaderLayout: FunctionComponent<IHeaderLayoutProps> = ({ children: { logo, menu, backArrow, title } }) => {
  if (title) {
    return (
      <HeaderLayoutWrapper>
        <RowListLayout.Align type="justify">
          {backArrow}
          {title}
          {menu}
        </RowListLayout.Align>
      </HeaderLayoutWrapper>
    );
  }

  return (
    <HeaderLayoutWrapper>
      <RowListLayout.Align type="justify">
        {logo}
        {menu}
      </RowListLayout.Align>
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
  padding: 8px 7px;
`;
