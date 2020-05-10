import React, { FC } from 'react';
import { useRouteMatch } from 'react-router';

import { AddSlackPage } from './AddSlackPage';

import { ADD_SLACK_PATH } from '~src/constants/paths';

interface IProps {}

export const AddSlackPageRoute: FC<IProps> = () => {
  const match = useRouteMatch(ADD_SLACK_PATH);

  if (!match || !match.isExact) {
    return null;
  }

  return <AddSlackPage />;
};
