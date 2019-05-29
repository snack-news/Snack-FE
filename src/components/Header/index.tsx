import React from 'react';

import BarWrapper from '../BarWrapper';

import logoImg from '../../resources/logo_blue2x.png';
import MenuImg from '../../resources/icon/menu_blue2x.png';

interface HeaderProps {}

const Logo = () => (
  <img
    src={logoImg}
    alt="logo"
    style={{
      height: '28px',
      justifyContent: 'center',
    }}
  />
);

const Menu = () => (
  <img
    src={MenuImg}
    alt="menu"
    style={{
      width: '30px',
      justifyContent: 'center',
    }}
  />
);

export const Header: React.SFC<HeaderProps> = () => {
  return (
    <BarWrapper>
      <Logo />
      <Menu />
    </BarWrapper>
  );
};

export default Header;
