import React from 'react';
import styled from 'styled-components';

import { ColListLayout, BothMarginWrapper, RowListLayout, PageLayout } from 'Layouts/index';
import { exitWhite } from 'Resources/index';
import { HorizontalDivider, SocialLinkList } from 'Templates/index';
import { withRouter } from 'react-router';
import { Link } from 'react-router-dom';

import { routes } from 'Config/routes';

export const MenuPage = () => {
  return (
    <PageLayout>
      {{
        header: <MenuHeader />,
        body: (
          <BothMarginWrapper depth={2} top="30px" bottom="30px">
            <MenuLinkList />
          </BothMarginWrapper>
        ),
        footer: (
          <>
            <HorizontalDivider />
            <BothMarginWrapper depth={2} top="30px" bottom="30px">
              <SocialLinkList imgBgType="white" align="Left" />
            </BothMarginWrapper>
          </>
        ),
      }}
    </PageLayout>
  );
};

const HeaderWrapper = styled.div`
  background-color: #0b66f7;
`;

const MenuHeader = withRouter(({ history }) => {
  return (
    <HeaderWrapper>
      <BothMarginWrapper depth={2} top="40px" bottom="40px">
        <RowListLayout.Align type="justify">
          <MenuTitle />
          <CloseButton onClick={history.goBack} />
        </RowListLayout.Align>
      </BothMarginWrapper>
    </HeaderWrapper>
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
      <MenuLink to={routes.homePage.getLink()}>홈</MenuLink>
      <MenuLink to={routes.companySelectPage.getLink()}>토픽 모아보기</MenuLink>
      <MenuLink to={routes.aboutPage.getLink()}>서비스 안내</MenuLink>
      <MenuLink to={routes.introduceFormPage.getLink()}>제안하기</MenuLink>
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
