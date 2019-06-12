import React from 'react';
import styled from 'styled-components';

import BarWrapper from '../BarWrapper';

import logoImg from '../../resources/logo_blue2x.png';
import MenuImg from '../../resources/icon/menu_blue2x.png';

interface HeaderProps {}

const Logo = styled.img.attrs({ src: logoImg })`
  height: 28px;
  justify-content: center;
`;

const Menu = styled.img.attrs({ src: MenuImg })`
  width: 30px;
  justify-content: center;
`;

export const Header: React.SFC<HeaderProps> = () => {
  return (
    <BarWrapper style={{ height: '54px' }}>
      <Logo />
      <Menu />
    </BarWrapper>
  );
};

export default Header;
