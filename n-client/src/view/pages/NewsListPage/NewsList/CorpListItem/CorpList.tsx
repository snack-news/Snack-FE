import React, { FC } from 'react';
import styled from 'styled-components';

import { Corp } from './Corp';

interface Props {}

export const CorpList: FC<Props> = () => {
  return (
    <Wrapper>
      <Corp />
      <Corp />
      <Corp />
      <Corp />
      <Corp />
      <Corp />
      <Corp />
      <Corp />
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
