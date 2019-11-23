import React, { FC } from 'react';

import { CropListItem } from './CropListItem';
import { NewsItem } from './NewsItem';
import { LinkListItem } from './LinkListItem';
import { PlatformLinkListItem } from './PlatformListItem';

import { HorizontalDivider } from '~nclient/view/atoms/Figures/HorizontalDivider';

interface Props {
  newsList: News[];
}

export const NewsList: FC<Props> = ({ newsList }) => (
  <>
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
