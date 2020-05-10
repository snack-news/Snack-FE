/* eslint-disable max-lines */
// TODO 코드 개선 필요 (너무 긴 라인수) (code bad smell)

import React, { FC } from 'react';
import styled from 'styled-components';

import { Link } from '~src/view/components/Link';
import { DARK } from '~src/constants/colors';
import {
  HOME_PATH,
  HOME_NAME,
  CORPS_PATH,
  CORPS_NAME,
  ABOUT_PATH,
  ABOUT_NAME,
  // ADD_SLACK_PATH,
  // ADD_SLACK_NAME,
} from '~src/constants/paths';

interface IProps {}

export const MenuItemList: FC<IProps> = () => (
  <MenuItemListWrapper>
    <MenuItem to={HOME_PATH}>{HOME_NAME}</MenuItem>
    <MenuItem to={CORPS_PATH}>{CORPS_NAME}</MenuItem>
    <MenuItem to={ABOUT_PATH}>{ABOUT_NAME}</MenuItem>
    {/* <MenuItem to={ADD_SLACK_PATH}>{ADD_SLACK_NAME}</MenuItem> */}
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
