import React from 'react';
import styled from 'styled-components';
import { FiMenu } from 'react-icons/fi';

import BarWrapper from '../BarWrapper';

import logo from './img/logo.png';

interface HeaderProps {}

const Logo = () => (
  <div>
    <img
      src={logo}
      alt="logo"
      style={{
        height: '22px',
        justifyContent: 'center',
      }}
    />
  </div>
);

const Center = styled.div`
  flex: 1;
`;

const Menu = () => (
  <div
    style={{
      height: '30px',
      width: '30px',
    }}
  >
    <FiMenu
      style={{
        fontSize: '24px',
        color: '#0b66f7',
      }}
    />
  </div>
);

export const Header: React.SFC<HeaderProps> = () => {
  return (
    <BarWrapper>
      <Logo />
      <Center />
      <Menu />
    </BarWrapper>
  );
};

export default Header;
