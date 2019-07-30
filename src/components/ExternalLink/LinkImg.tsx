import React, { FunctionComponent } from 'react';
import styled from 'styled-components';

import generatorGetShuffleItem from './generatorGetShuffleItem';

interface ILinkImgProps {
  imgSrc?: string;
  isRenderShuffleBackgroundColorBox?: boolean;
}

const BACKGROUND_COLORS = ['#4f59f8', '#f8603a', '#1fb07e', '#ff9a26', '#667d43'];
const getShuffleColor = generatorGetShuffleItem<string>(BACKGROUND_COLORS);

const LinkImg: FunctionComponent<ILinkImgProps> = ({
  imgSrc,
  isRenderShuffleBackgroundColorBox,
}) => {
  if (imgSrc) {
    return <img src={imgSrc} style={{ width: '100%' }} alt="link" />;
  }

  return isRenderShuffleBackgroundColorBox ? (
    <ShuffleBackgroundColorBox label="Snack's Pick:" />
  ) : null;
};

interface IShuffleBackgroundColorBoxProps {
  label: string;
}

const ShuffleBackgroundColorBox: FunctionComponent<IShuffleBackgroundColorBoxProps> = ({
  label,
}) => {
  const backgroundColor = getShuffleColor.next().value;
  return (
    <div style={{ width: '100%', height: '160px', backgroundColor }}>
      <Label>{label}</Label>
    </div>
  );
};

const Label = styled.div`
  position: relative;
  top: 20px;
  left: 25px;

  width: 156px;
  height: 36px;
  font-size: 24px;
  font-weight: bold;
  color: #fefefe;
`;

export default LinkImg;
