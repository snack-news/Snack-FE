import React from 'react';
import styled from 'styled-components';

import BarWrapper from '../BarWrapper';

import downarrowImg from '../../resources/icon/downarrow.png';

interface SelectBoxProps {}

const Label = styled.div`
  font-family: SFProDisplay;
  font-size: 17px;
  font-weight: 600;
  font-style: normal;
  font-stretch: normal;
  line-height: normal;
  letter-spacing: normal;
  color: #121111;
`;

const DownArrowIcon = styled.img.attrs({
  src: downarrowImg,
})`
  height: 7px;
`;

export const SelectBox: React.SFC<SelectBoxProps> = () => {
  return (
    <BarWrapper style={{ height: '54px' }}>
      <Logo />
      <Menu />
    </BarWrapper>
  );
};

export default SelectBox;
