import React, { FC } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

import { dark } from '~nclient/constants/colors';
import { homePath, corpsPath, aboutPath, contactPath } from '~nclient/constants/paths';

interface Props {}

export const MenuItemList: FC<Props> = () => (
  <MenuItemListWrapper>
    <MenuItem to={homePath}>홈</MenuItem>
    <MenuItem to={corpsPath}>토픽 모아보기</MenuItem>
    <MenuItem to={aboutPath}>서비스 안내</MenuItem>
    <MenuItem to={contactPath}>제안하기</MenuItem>
  </MenuItemListWrapper>
);

const MenuItemListWrapper = styled.nav`
  padding-top: 20px;
  padding-bottom: 20px;
  padding-right: 40px;
  padding-left: 40px;
`;

const MenuItem = styled(Link)`
  display: block;
  padding-top: 10px;
  padding-bottom: 10px;
  list-style: none;
  font-size: 24px;
  font-weight: bold;
  line-height: normal;
  text-decoration: none;
  color: ${dark};
`;
