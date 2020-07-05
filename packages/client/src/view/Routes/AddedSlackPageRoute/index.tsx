import React, { FC } from 'react';
import { useRouteMatch, Redirect } from 'react-router';

import { ADD_SLACK_PATH, ADDED_SLACK_PATH } from '~src/constants/paths';

interface IProps {}

export const AddedSlackPageRoute: FC<IProps> = () => {
  const match = useRouteMatch(ADDED_SLACK_PATH);

  if (!match || !match.isExact) {
    return null;
  }

  return <Redirect to={ADD_SLACK_PATH} />;
};
