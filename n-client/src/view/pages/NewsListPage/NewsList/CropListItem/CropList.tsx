import React, { FC } from 'react';
import styled from 'styled-components';

import { Crop } from './Crop';

interface Props {}

export const CropList: FC<Props> = () => {
  return (
    <Wrapper>
      <Crop />
      <Crop />
      <Crop />
      <Crop />
      <Crop />
      <Crop />
      <Crop />
      <Crop />
    </Wrapper>
  );
};

const Wrapper = styled.section`
  display: flex;

  padding-right: 20px;
  padding-left: 20px;
  overflow: auto;

  > * {
    margin-right: 10px;
  }
`;
