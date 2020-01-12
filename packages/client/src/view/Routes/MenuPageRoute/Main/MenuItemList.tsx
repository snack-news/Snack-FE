import React, { FC } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

import { DARK } from '~src/constants/colors';
import {
  HOME_PATH,
  CORPS_PATH,
  ABOUT_PATH,
  ABOUT_NAME,
  HOME_NAME,
  CORPS_NAME,
  PROPOSE_PATH,
  PROPOSE_NAME,
} from '~src/constants/paths';

interface IProps {}

export const MenuItemList: FC<IProps> = () => (
  <MenuItemListWrapper>
    <MenuItem to={HOME_PATH}>{HOME_NAME}</MenuItem>
    <MenuItem to={CORPS_PATH}>{CORPS_NAME}</MenuItem>
    <MenuItem to={ABOUT_PATH}>{ABOUT_NAME}</MenuItem>
    <MenuItem to={PROPOSE_PATH}>{PROPOSE_NAME}</MenuItem>
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
  color: ${DARK};
`;
