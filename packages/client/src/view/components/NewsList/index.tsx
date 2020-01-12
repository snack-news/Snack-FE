import React, { FC } from 'react';

import { Items } from './Items';

import { useNewsList } from '~src/hooks/useNewsList';

interface IProps extends INewsFilter {
  isRenderCorpList?: boolean;
  isRenderLinkListItem?: boolean;
  isRenderPlatformLinkListItem?: boolean;

  onFatched?: () => void;
}

export const NewsList: FC<IProps> = ({
  children,
  isRenderCorpList,
  isRenderLinkListItem,
  isRenderPlatformLinkListItem,
  onFatched,
  ...requestParams
}) => {
  const newsList = useNewsList(requestParams);

  if (!newsList) return null;

  if (onFatched) onFatched();

  return (
    <Items
      newsList={newsList}
      isRenderCorpList={isRenderCorpList}
      isRenderLinkListItem={isRenderLinkListItem}
      isRenderPlatformLinkListItem={isRenderPlatformLinkListItem}
    />
  );
};
