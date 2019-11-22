import React from 'react';
import styled from 'styled-components';

import { slateGrey } from '~nclient/view/atoms/styles/colors';
import { Copy } from '~nclient/view/atoms/styles/Icons';

interface Props {}

export const NewsFooter: React.FC<Props> = () => {
  return (
    <Wrapper>
      <CopyIcon />
      <CopyLabel>링크복사</CopyLabel>
    </Wrapper>
  );
};

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

const CopyIcon = styled(Copy)`
  width: 16px;
  margin: 2px 4px;
`;

const CopyLabel = styled.div`
  margin-left: 3px;
  font-size: 13px;

  color: ${slateGrey};
`;
