// TODO 구현 필요

import React, { FC } from 'react';
import { useRouteMatch } from 'react-router';

import { ProposePage } from './ProposePage';

import { PROPOSE_PATH } from '~nclient/constants/paths';

interface IProps {}

export const ProposePageRoute: FC<IProps> = () => {
  const match = useRouteMatch(PROPOSE_PATH);

  if (!match || !match.isExact) {
    return null;
  }

  return <ProposePage />;
};
