import React, { FC } from 'react';
import styled from 'styled-components';

import { MenuItem } from './MenuItem';

interface Props {}

export const MenuItemList: FC<Props> = () => {
  return (
    <MenuItemListWrapper>
      <MenuItem>홈</MenuItem>
      <MenuItem>토픽 모아보기</MenuItem>
      <MenuItem>서비스 안내</MenuItem>
      <MenuItem>제안하기</MenuItem>
    </MenuItemListWrapper>
  );
};

const MenuItemListWrapper = styled.ul`
  padding-top: 20px;
  padding-bottom: 20px;
  padding-right: 40px;
  padding-left: 40px;

  font-family: 'Noto Sans KR', sans-serif;
`;
