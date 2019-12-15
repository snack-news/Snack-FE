import React from 'react';
import styled from 'styled-components';

import { Layer } from './Layer';
import { Header } from './Header';

import { Options } from './Options';

import { HorizontalDivider } from '~nclient/view/atoms/Figures/HorizontalDivider';

interface Props {}

export const WeekSelector: React.FC<Props> = () => {
  return (
    <>
      <Layer />
      <Wrapper>
        <Header />
        <HorizontalDivider />
        <Options />
      </Wrapper>
    </>
  );
};

const Wrapper = styled.section`
  position: fixed;
  bottom: 0px;
  background-color: rgb(255, 255, 255);
  max-width: 600px;
  width: 100%;
  border-top-right-radius: 5px;
  border-top-left-radius: 5px;

  display: flex;
  padding-bottom: 20px;
  flex-direction: column;
`;
