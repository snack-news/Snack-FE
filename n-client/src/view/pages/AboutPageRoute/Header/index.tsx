import React, { FC } from 'react';
import { useRouteMatch } from 'react-router';

import { Header } from '~nclient/view/components/Header';
import { HorizontalDivider } from '~nclient/view/components/HorizontalDivider';
import { ABOUT_PATH } from '~nclient/constants/paths';

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
