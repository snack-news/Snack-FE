import React, { FC } from 'react';
import styled from 'styled-components';

import { MenuImg } from '~nclient/resources';
import { ImgLink } from '~nclient/view/components/ImgLink';
import { MENU_PATH } from '~nclient/constants/paths';

export const MenuAnchor: FC = () => <MenuLink to={MENU_PATH} alt="menu" />;

const MenuLink = styled(ImgLink).attrs({ src: MenuImg })`
  display: block;
  width: 16px;
  margin: 6px;

  padding: 0px 20px;
  height: 100%;
`;
