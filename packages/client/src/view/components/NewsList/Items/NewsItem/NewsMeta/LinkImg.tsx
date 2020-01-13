/* eslint-disable max-lines */
// TODO 코드 개선 필요 (너무 긴 라인수) (code bad smell)

import React, { FC } from 'react';
import styled from 'styled-components';

import { useImageSize } from './useImageSize';

interface IProps {
  image: string;
}

const MIN_HEIGHT = 400;
const MIN_WIDTH = 400;

export const LinkImg: FC<IProps> = ({ image }) => {
  const imgSize = useImageSize(image);

  if (
    !imgSize ||
    imgSize.height < MIN_HEIGHT ||
    imgSize.width < MIN_WIDTH ||
    imgSize.height === imgSize.width
  ) {
    return null;
  }

  return (
    <LinkImageWrapper>
      <div
        style={{
          width: '100%',
          height: '180px',
          backgroundPosition: 'center center',
          backgroundRepeat: 'no-repeat',
          backgroundImage: `url('${image}')`,
          backgroundSize: 'cover',
        }}
      />
    </LinkImageWrapper>
  );
};

const LinkImageWrapper = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;
`;
