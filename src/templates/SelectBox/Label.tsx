import React, { FunctionComponent, useState } from 'react';
import styled from 'styled-components';

import { downarrowImg } from 'Resources/index';

import { SelectItemListBox } from './SelectItemListBox';

const DownArrowIcon = styled.img.attrs({
  src: downarrowImg,
})`
  height: 7px;
  padding: 0 10px;
`;

const LabelWrapper = styled.div`
  font-size: 17px;
  font-weight: 600;
  color: #121111;

  align-items: center;
  padding: 14px 20px;
`;

interface ILabel {
  year: string;
  month: string;
  week: string;
}

const Label: FunctionComponent<ILabel> = ({ year, month, week }) => {
  const [isShowListBox, setShowListBox] = useState(false);
  const showListBox = () => setShowListBox(true);
  const hideListBox = () => setShowListBox(false);

  return (
    <>
      <LabelWrapper onClick={showListBox}>
        {`${month}월 ${week}주`}
        <DownArrowIcon />
      </LabelWrapper>
      {isShowListBox && (
        <SelectItemListBox year={year} month={month} week={week} onClickCloseButton={hideListBox} onClickLayer={hideListBox} onChange={hideListBox} />
      )}
    </>
  );
};

export default Label;
