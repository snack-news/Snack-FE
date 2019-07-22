import React, { ReactNode, FunctionComponent } from 'react';
import styled from 'styled-components';

import { ColListLayout, BothMarginWrapper, RowListLayout } from 'Layouts/index';
import { exitWhite } from 'Resources/index';
import { HorizontalDivider, SocialLinkList } from 'Templates/index';
import { withRouter } from 'react-router';
import { Link } from 'react-router-dom';

import { routes } from 'Config/routes';

export const MenuPage = () => {
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
    <ColListLayout.Repeat interval="25px">
      <HeaderWrapper>
        <BothMarginWrapper depth={2}>{header}</BothMarginWrapper>
      </HeaderWrapper>
      <BothMarginWrapper depth={2}>{body}</BothMarginWrapper>
      <HorizontalDivider />
      <BothMarginWrapper depth={2}>{footer}</BothMarginWrapper>
    </ColListLayout.Repeat>
  );
};

const HeaderWrapper = styled.div`
  background-color: #0b66f7;
`;

const MenuHeader = withRouter(({ history }) => {
  return (
    <RowListLayout.Align type="justify" top="40px" bottom="40px">
      <MenuTitle />
      <CloseButton onClick={history.goBack} />
    </RowListLayout.Align>
  );
});

const CloseButton = styled.img.attrs({ src: exitWhite })`
  width: 18px;
  margin: 6px;
`;

const MenuTitle = styled.div.attrs({ children: 'Menu' })`
  font-size: 24px;
  font-weight: 600;
  color: #fefefe;
`;

const MenuLinkList = () => {
  return (
    <ColListLayout.Repeat interval="20px">
      <MenuLink to={routes.homePage}>홈</MenuLink>
      <MenuLink to={routes.companyNewsListPage}>토픽 모아보기</MenuLink>
      <MenuLink to="/">서비스 안내</MenuLink>
      <MenuLink to={routes.aboutPage}>공지사항</MenuLink>
      <MenuLink to={routes.introduceFormPage}>제안하기</MenuLink>
      <MenuLink to="/">문의하기</MenuLink>
    </ColListLayout.Repeat>
  );
};

const MenuLink = styled(Link)`
  font-size: 24px;
  font-weight: bold;
  line-height: normal;
  color: #1e1e25;
  text-decoration: none;
`;
