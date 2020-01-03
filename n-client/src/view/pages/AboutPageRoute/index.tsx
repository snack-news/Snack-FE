import React, { FC } from 'react';
import { useRouteMatch } from 'react-router';

import { AboutPage } from './AboutPage';

import { ABOUT_PATH } from '~nclient/constants/paths';

interface IProps {}

export const AboutPageRoute: FC<IProps> = () => {
  const match = useRouteMatch(ABOUT_PATH);

  if (!match || !match.isExact) {
    return null;
  }

  return <AboutPage />;
};
