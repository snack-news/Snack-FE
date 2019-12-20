import React, { FC } from 'react';

import { CorpListItem } from './CorpListItem';
import { NewsItem } from './NewsItem';
import { LinkListItem } from './LinkListItem';
import { PlatformLinkListItem } from './PlatformListItem';
import { useNewsList } from './useNewsList';

import { HorizontalDivider } from '~nclient/view/atoms/Figures/HorizontalDivider';

interface Props {}

export const NewsList: FC<Props> = () => {
  const newsList = useNewsList();

  return (
    <>
      {newsList &&
        newsList.map(news => (
          <React.Fragment key={news.id}>
            <NewsItem news={news} />
            <HorizontalDivider thick />
          </React.Fragment>
        ))}
      <CorpListItem />
      <HorizontalDivider thick />
      <LinkListItem />
      <HorizontalDivider thick />
      <PlatformLinkListItem />
    </>
  );
};
