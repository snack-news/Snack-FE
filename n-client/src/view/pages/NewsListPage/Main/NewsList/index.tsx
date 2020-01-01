import React, { FC } from 'react';

import { CorpListItem } from './CorpListItem';
import { LinkListItem } from './LinkListItem';
import { NewsItem } from './NewsItem';
import { PlatformLinkListItem } from './PlatformLinkListItem';
import { useNewsList } from './useNewsList';

import { HorizontalDivider } from '~nclient/view/components/HorizontalDivider';

interface Props {
  startDateTime?: string;
  corpId?: string;
}

// TODO CorpListItem, LinkListItem, PlatformLinkListItem 의 순서 조정
export const NewsList: FC<Props> = ({ startDateTime, corpId }) => {
  const newsList = useNewsList({ startDateTime, corpId });

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
