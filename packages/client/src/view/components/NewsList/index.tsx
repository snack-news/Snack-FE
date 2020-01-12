import React, { FC } from 'react';

import { Items } from './Items';

import { useNews } from '~src/hooks/useNews';
import { useNewsList } from '~src/hooks/useNewsList';

interface IProps extends INewsFilter {
  isRenderCorpList?: boolean;
  isRenderLinkListItem?: boolean;
  isRenderPlatformLinkListItem?: boolean;
  mainNewsId?: string;

  onFatched?: () => void;
}

export const NewsList: FC<IProps> = ({
  children,
  isRenderCorpList,
  isRenderLinkListItem,
  isRenderPlatformLinkListItem,
  mainNewsId,
  onFatched,
  ...requestParams
}) => {
  const mainNews = useNews(mainNewsId);
  const newsList = useNewsList(requestParams);

  if (!newsList) return null;

  if (onFatched) onFatched();

  return (
    <Items
      mainNews={mainNews}
      newsList={newsList}
      isRenderCorpList={isRenderCorpList}
      isRenderLinkListItem={isRenderLinkListItem}
      isRenderPlatformLinkListItem={isRenderPlatformLinkListItem}
    />
  );
};
