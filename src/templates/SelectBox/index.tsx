import React, { FunctionComponent } from 'react';
import styled from 'styled-components';

import { BothMarginWrapper, RowListLayout } from 'Layouts/index';
import Label from './Label';

import contentImg from '../../resources/icon/content.png';

interface ISelectBoxProps {}

const ContentIcon = styled.img.attrs({
  src: contentImg,
})`
  width: 22px;
`;

const SelectBoxWrapper = styled(BothMarginWrapper)`
  margin: 12px 0;
`;

export const SelectBox: FunctionComponent<ISelectBoxProps> = () => {
  return (
    <SelectBoxWrapper>
      <RowListLayout.Align type="justify">
        {/* TODO API 및 getDateFormat 사용 */}
        <Label text="1월 2주" />
        <ContentIcon />
      </RowListLayout.Align>
    </SelectBoxWrapper>
  );
};
