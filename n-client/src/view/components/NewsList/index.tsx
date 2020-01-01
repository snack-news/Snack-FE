import React, { FC } from 'react';

import { useNewsList } from './useNewsList';
import { Items } from './Items';

interface Props {
  startDateTime?: string;
  corpId?: string;

  isRenderCorpList?: boolean;
  isRenderLinkListItem?: boolean;
  isRenderPlatformLinkListItem?: boolean;
}

export const NewsList: FC<Props> = ({
  startDateTime,
  corpId,
  isRenderCorpList,
  isRenderLinkListItem,
  isRenderPlatformLinkListItem,
}) => {
  const newsList = useNewsList({ startDateTime, corpId });

  if (!newsList) {
    return null;
  }

  return (
    <Items
      newsList={newsList}
      isRenderCorpList={isRenderCorpList}
      isRenderLinkListItem={isRenderLinkListItem}
      isRenderPlatformLinkListItem={isRenderPlatformLinkListItem}
    />
  );
};
