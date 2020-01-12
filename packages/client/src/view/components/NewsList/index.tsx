import React, { FC } from 'react';

import { Items } from './Items';

import { useNews } from '~src/hooks/useNews';
import { useNewsList } from '~src/hooks/useNewsList';

interface IProps {
  isRenderCorpList?: boolean;
  isRenderLinkListItem?: boolean;
  isRenderPlatformLinkListItem?: boolean;
  mainNewsId?: string;
  filter: INewsFilter;

  onFatched?: () => void;
  onNoContent?: () => void;
}

export const NewsList: FC<IProps> = ({
  isRenderCorpList,
  isRenderLinkListItem,
  isRenderPlatformLinkListItem,
  mainNewsId,
  onFatched,
  onNoContent,
  filter,
}) => {
  const mainNews = useNews(mainNewsId);
  const newsList = useNewsList(filter, onFatched, onNoContent);

  if (!newsList) return null;

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
