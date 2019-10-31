import React from 'react';
import styled from 'styled-components';

import { Copy } from '../styles/Icons';

import { slateGrey } from '~nclient/view/atoms/styles/colors';
import { littleMedium } from '~nclient/view/atoms/styles/fonts';

export const LinkCopyButton = () => {
  return (
    <Wrap>
      <CopyIcon />
      <Label>링크복사</Label>
    </Wrap>
  );
};

const Wrap = styled.button`
  width: 90px;
  height: 40px;
  border-width: 0px;
`;

const CopyIcon = styled(Copy)`
  height: 19px;
  vertical-align: middle;
`;

const Label = styled.span`
  ${littleMedium}
  color: ${slateGrey};

  vertical-align: middle;
  margin-left: 6px;
`;
