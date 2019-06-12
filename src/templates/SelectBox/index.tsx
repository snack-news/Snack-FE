import React from 'react';
import styled from 'styled-components';

import BarWrapper from '../BarWrapper';
import Label from './Label';

import contentImg from '../../resources/icon/content.png';

interface SelectBoxProps {}

const ContentIcon = styled.img.attrs({
  src: contentImg,
})`
  width: 22px;
`;

export const SelectBox: React.SFC<SelectBoxProps> = () => {
  return (
    <BarWrapper style={{ height: '45px' }}>
      <Label text="1월 2주" />
      <ContentIcon />
    </BarWrapper>
  );
};

export default SelectBox;
