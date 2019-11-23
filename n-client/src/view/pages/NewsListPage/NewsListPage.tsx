import React, { FC } from 'react';

import { Nav } from './Nav';
import { CropListItem } from './CropListItem';
import { NewsItem } from './NewsItem';
import { LinkListItem } from './LinkListItem';
import { PlatformLinkListItem } from './PlatformListItem';

import { Header } from '~nclient/view/components/Header';
import { HorizontalDivider } from '~nclient/view/atoms/Figures/HorizontalDivider';

interface Props {
  newsList: News[];
}

export const NewsListPage: FC<Props> = ({ newsList }) => (
  <>
    <Header />
    <HorizontalDivider />
    <Nav />
    <HorizontalDivider thick />

    {newsList.map(news => (
      <React.Fragment key={news.id}>
        <NewsItem news={news} />
        <HorizontalDivider thick />
      </React.Fragment>
    ))}
    <CropListItem />
    <HorizontalDivider thick />
    <LinkListItem />
    <HorizontalDivider thick />
    <PlatformLinkListItem />
  </>
);
