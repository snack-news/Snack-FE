import React from 'react';
import styled from 'styled-components';

import { BothMarginWrapper, RowListLayout } from 'Layouts/index';
import Label from './Label';

import contentImg from '../../resources/icon/content.png';

interface SelectBoxProps {}

const ContentIcon = styled.img.attrs({
  src: contentImg,
})`
  width: 22px;
`;

const SelectBoxWrapper = styled(BothMarginWrapper)`
  margin: 12px 0;
`;

export const SelectBox: React.SFC<SelectBoxProps> = () => {
  return (
    <SelectBoxWrapper>
      <RowListLayout.Between>
        <Label text="1월 2주" />
        <ContentIcon />
      </RowListLayout.Between>
    </SelectBoxWrapper>
  );
};

export default SelectBox;
