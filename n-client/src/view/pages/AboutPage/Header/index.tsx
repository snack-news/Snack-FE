import React, { FC } from 'react';
import { useRouteMatch } from 'react-router';

import { Header } from '~nclient/view/components/Header';
import { HorizontalDivider } from '~nclient/view/components/HorizontalDivider';
import { aboutPath } from '~nclient/constants/paths';

interface Props {}

export const AboutPageHeader: FC<Props> = () => {
  const match = useRouteMatch(aboutPath);

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
