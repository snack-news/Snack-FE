import React, { FC } from 'react';
import styled from 'styled-components';

import { MenuItem } from './MenuItem';

interface Props {}

export const MenuItemList: FC<Props> = () => {
  return (
    <MenuItemListWrapper>
      <MenuItem to="/">홈</MenuItem>
      <MenuItem to="/corps">토픽 모아보기</MenuItem>
      <MenuItem to="/about">서비스 안내</MenuItem>
      <MenuItem to="/contact">제안하기</MenuItem>
    </MenuItemListWrapper>
  );
};

const MenuItemListWrapper = styled.nav`
  padding-top: 20px;
  padding-bottom: 20px;
  padding-right: 40px;
  padding-left: 40px;

  font-family: 'Noto Sans KR', sans-serif;
`;
