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

const Label: FunctionComponent<{ text: string }> = ({ text }) => {
  const [isShowListBox, setShowListBox] = useState(false);
  const showListBox = () => setShowListBox(true);
  const hideListBox = () => setShowListBox(false);

  return (
    <>
      <LabelWrapper onClick={showListBox}>
        {text}
        <DownArrowIcon />
      </LabelWrapper>
      {isShowListBox && (
        <SelectItemListBox onClickCloseButton={hideListBox} onClickLayer={hideListBox} />
      )}
    </>
  );
};

export default Label;
