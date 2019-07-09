import React from 'react';
import styled from 'styled-components';

import { downarrowImg } from 'Resources/index';

const DownArrowIcon = styled.img.attrs({
  src: downarrowImg,
})`
  height: 7px;
  padding: 0 10px;
`;

const LabelWrapper = styled.div`
  align-items: center;
  padding: 14px 20px;
`;

const Label = styled.div.attrs<{ text: string }>(({ text }) => ({
  children: (
    <LabelWrapper>
      {text}
      <DownArrowIcon />
    </LabelWrapper>
  ),
}))<{ text: string }>`
  font-family: SFProDisplay;
  font-size: 17px;
  font-weight: 600;
  color: #121111;
`;

export default Label;
