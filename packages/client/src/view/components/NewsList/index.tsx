/* eslint-disable max-lines */
// TODO 코드 개선 필요 (너무 긴 라인수) (code bad smell)

import React, { FC, useMemo } from 'react';

import { Items } from './Items';

import { useFilter } from '../../../hooks/useFilter/index';

import { useNewsList } from '~src/hooks/useNewsList';

interface IProps {
  isRenderCorpList?: boolean;
  isRenderLinkListItem?: boolean;
  isRenderPlatformLinkListItem?: boolean;
  excludeNewsId?: number;

  onFatched?: () => void;
  onNoContent?: () => void;
}

export const NewsList: FC<IProps> = ({
  isRenderCorpList,
  isRenderLinkListItem,
  isRenderPlatformLinkListItem,
  excludeNewsId,
  onFatched,
  onNoContent,
}) => {
  const filter = useFilter();
  const newsList = useNewsList(filter, onFatched, onNoContent);

  const renderNewsList = useMemo(() => {
    let filteredNewsList = newsList ?? [];

    if (excludeNewsId) {
      filteredNewsList = filteredNewsList.filter(({ id }) => id !== excludeNewsId);
    }

    return filteredNewsList;
  }, [excludeNewsId, newsList]);

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
