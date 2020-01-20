/* eslint-disable max-lines */
// TODO 코드 개선 필요 (너무 긴 라인수) (code bad smell)

import React, { FC, useMemo } from 'react';

import { Items } from './Items';

import { useNews } from '~src/hooks/useNews';
import { useNewsList } from '~src/hooks/useNewsList';

interface IProps {
  isRenderCorpList?: boolean;
  isRenderLinkListItem?: boolean;
  isRenderPlatformLinkListItem?: boolean;
  mainNewsId?: number;
  excludeNewsId?: number;
  filter: INewsFilter;

  onFatched?: () => void;
  onNoContent?: () => void;
}

export const NewsList: FC<IProps> = ({
  isRenderCorpList,
  isRenderLinkListItem,
  isRenderPlatformLinkListItem,
  mainNewsId,
  excludeNewsId,
  onFatched,
  onNoContent,
  filter,
}) => {
  const mainNews = useNews(mainNewsId);
  const newsList = useNewsList(filter, onFatched, onNoContent);

  const renderNewsList = useMemo(() => {
    let filteredNewsList = newsList ?? [];

    if (mainNews) {
      filteredNewsList = [mainNews, ...filteredNewsList.filter(({ id }) => id !== mainNews.id)];
    }

    if (excludeNewsId) {
      filteredNewsList = filteredNewsList.filter(({ id }) => id !== excludeNewsId);
    }

    return filteredNewsList;
  }, [excludeNewsId, mainNews, newsList]);

  if (!newsList) return null;

  return (
    <Items
      newsList={renderNewsList}
      isRenderCorpList={isRenderCorpList}
      isRenderLinkListItem={isRenderLinkListItem}
      isRenderPlatformLinkListItem={isRenderPlatformLinkListItem}
    />
  );
};
