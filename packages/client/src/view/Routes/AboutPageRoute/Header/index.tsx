import React, { FC } from 'react';
import { useRouteMatch } from 'react-router';

import { Header } from '~src/view/components/Header';
import { HorizontalDivider } from '~src/view/components/HorizontalDivider';
import { ABOUT_PATH } from '~src/constants/paths';

interface IProps {}

export const AboutPageHeader: FC<IProps> = () => {
  const match = useRouteMatch(ABOUT_PATH);

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
