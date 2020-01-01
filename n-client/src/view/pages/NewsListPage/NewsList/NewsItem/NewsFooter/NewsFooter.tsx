import React, { FC } from 'react';
import styled from 'styled-components';

import { slateGrey } from '~nclient/constants/colors';
import { copyImg } from '~nclient/resources';

interface Props {}

export const NewsFooter: FC<Props> = () => (
  <Wrapper>
    <CopyIcon />
    <CopyLabel>링크복사</CopyLabel>
  </Wrapper>
);

const Wrapper = styled.button`
  padding: 15px;
  width: 100%;

  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;

  background: transparent;
  border-width: 0;
`;

const CopyIcon = styled.img.attrs({ src: copyImg })`
  width: 16px;
  margin: 2px 4px;
`;

const CopyLabel = styled.div`
  margin-left: 3px;
  font-size: 13px;

  color: ${slateGrey};
`;
