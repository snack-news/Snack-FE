import React, { FC, useMemo, useState, useCallback } from 'react';

import { subDays } from 'date-fns';

import { IntersectionObserverComponent } from './IntersectionObserverComponent';
import { useStatus } from './useStatus';

import { NewsList } from '~src/view/components/NewsList';
import { endOfWeekOrMonth } from '~src/utils/date/endOfWeekOrMonth';
import { dateToString } from '~src/utils/date/dateToString';
import { startOfWeekOrMonth } from '~src/utils/date/startOfWeekOrMonth';

interface IProps {
  isRenderCorpList?: boolean;
  isRenderLinkListItem?: boolean;
  isRenderPlatformLinkListItem?: boolean;
  mainNewsId?: string;
  filter: INewsFilter;
  maxNoConentCount?: number;
  noConentCount?: number;
}

export const InfiniteScrollNewsList: FC<IProps> = ({
  isRenderCorpList,
  isRenderLinkListItem,
  isRenderPlatformLinkListItem,
  mainNewsId,
  filter,
  noConentCount = 0,
  maxNoConentCount = 3,
}) => {
  const { status, setLoading, setRendered } = useStatus();
  const [noContent, setNoContent] = useState<boolean>(false);

  const nextFilter = useMemo(() => {
    const startDate = startOfWeekOrMonth(subDays(new Date(filter.startDateTime), 1));

    return {
      ...filter,
      startDateTime: dateToString(startDate, 'VALUE'),
      endDateTime: dateToString(endOfWeekOrMonth(startDate), 'VALUE'),
    };
  }, [filter]);

  const isNoContent = useCallback(() => {
    setNoContent(true);
  }, []);

  const nextNoContent = useMemo(() => (noContent ? noConentCount + 1 : noConentCount), [
    noConentCount,
    noContent,
  ]);

  return (
    <>
      {status === 'OBSERVING' && (
        <IntersectionObserverComponent onObserve={setLoading} key="observer" />
      )}
      {status === 'OBSERVING' ? null : (
        <NewsList
          filter={filter}
          isRenderCorpList={isRenderCorpList}
          isRenderLinkListItem={isRenderLinkListItem}
          isRenderPlatformLinkListItem={isRenderPlatformLinkListItem}
          mainNewsId={mainNewsId}
          onFatched={setRendered}
          onNoContent={isNoContent}
          key="newsList"
        />
      )}
      {status === 'RENDERED' && noConentCount < maxNoConentCount && (
        <InfiniteScrollNewsList
          filter={nextFilter}
          noConentCount={nextNoContent}
          maxNoConentCount={maxNoConentCount}
          key="nextNewsList"
        />
      )}
    </>
  );
};
