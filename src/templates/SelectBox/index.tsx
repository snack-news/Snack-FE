import React, { FunctionComponent } from 'react';
// import styled from 'styled-components';

import { RowListLayout } from 'Layouts/index';
// import { contentImg } from 'Resources/index';
import Label from './Label';

interface ISelectBoxProps {
  month: string;
  week: string;
}

export const SelectBox: FunctionComponent<ISelectBoxProps> = ({ month, week }) => {
  return (
    <RowListLayout.Align type="justify">
      {/* TODO API 및 getDateFormat 사용 */}
      <Label text={`${month}월 ${week}주`} />
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
