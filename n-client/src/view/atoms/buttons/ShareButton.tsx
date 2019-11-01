import React from 'react';
import styled from 'styled-components';

import { Share } from '../styles/Icons';

import { slateGrey } from '~nclient/view/atoms/styles/colors';
import { littleMedium } from '~nclient/view/atoms/styles/fonts';

export const ShareButton = () => {
  return (
    <Button>
      <ShareIcon />
      <Label>공유하기</Label>
    </Button>
  );
};

const Button = styled.button`
  width: 90px;
  height: 40px;
  border-width: 0px;
`;

const ShareIcon = styled(Share)`
  height: 19px;
  vertical-align: middle;
`;

const Label = styled.span`
  ${littleMedium}
  color: ${slateGrey};

  vertical-align: middle;
  margin-left: 6px;
`;
