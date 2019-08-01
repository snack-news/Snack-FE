import React, { FunctionComponent } from 'react';
// import styled from 'styled-components';

import { RowListLayout } from 'Layouts/index';
// import { contentImg } from 'Resources/index';
import Label from './Label';

interface ISelectBoxProps {}

export const SelectBox: FunctionComponent<ISelectBoxProps> = () => {
  return (
    <RowListLayout.Align type="justify">
      {/* TODO API 및 getDateFormat 사용 */}
      <Label text="1월 2주" />
      {/* <ContentIcon /> */}
    </RowListLayout.Align>
  );
};

// const ContentIcon = styled.img.attrs({
//   src: contentImg,
// })`
//   width: 22px;
//   margin-right: 20px;
// `;
