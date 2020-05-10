import React, { FC } from 'react';
import { useRouteMatch } from 'react-router';

import { Header } from '~src/view/components/Header';
import { HorizontalDivider } from '~src/view/components/HorizontalDivider';
import { ADD_SLACK_PATH } from '~src/constants/paths';

interface IProps {}

export const AddSlackPageHeader: FC<IProps> = () => {
  const match = useRouteMatch(ADD_SLACK_PATH);

  if (!match || !match.isExact) {
    return null;
  }

  return (
    <>
      <Header />
      <HorizontalDivider />
    </>
  );
};
