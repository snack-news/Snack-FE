import React, { FC } from 'react';

import { Nav } from './Nav';
import { NewsList } from './NewsList';

import { Header } from '~nclient/view/components/Header';
import { HorizontalDivider } from '~nclient/view/atoms/Figures/HorizontalDivider';

interface Props {}

export const NewsListPage: FC<Props> = () => {
  return (
    <>
      <Header />
      <HorizontalDivider />
      <Nav />
      <HorizontalDivider thick />
      <NewsList />
    </>
  );
};
