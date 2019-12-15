import React from 'react';
import styled from 'styled-components';

import { Layer } from '~nclient/view/components/Layer';

interface Props {}

export const BottomDrawer: React.FC<Props> = ({ children }) => {
  return (
    <>
      <Layer />
      <Wrapper>{children}</Wrapper>
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
