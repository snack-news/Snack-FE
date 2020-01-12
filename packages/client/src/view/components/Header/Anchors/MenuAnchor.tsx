import React, { FC } from 'react';
import styled from 'styled-components';

import { MenuImg } from '~src/resources';
import { ImgLink } from '~src/view/components/ImgLink';
import { MENU_PATH } from '~src/constants/paths';

export const MenuAnchor: FC = () => <MenuLink to={MENU_PATH} alt="menu" />;

const MenuLink = styled(ImgLink).attrs({ src: MenuImg, width: '16px' })`
  height: 100%;
  width: 68px;
`;
