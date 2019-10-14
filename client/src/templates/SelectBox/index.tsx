import React, { FunctionComponent } from 'react';
// import styled from 'styled-components';

import { RowListLayout } from '~client/layouts/index';

// import { contentImg } from '~client/resources/index';
import Label from './Label';

interface ISelectBoxProps {
  year: string;
  month: string;
  week: string;
}

export const SelectBox: FunctionComponent<ISelectBoxProps> = ({ year, month, week }) => {
  return (
    <RowListLayout.Align type="justify">
      {/* TODO API 및 getDateFormat 사용 */}
      <Label year={year} month={month} week={week} />
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
