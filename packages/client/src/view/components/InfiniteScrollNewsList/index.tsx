/* eslint-disable max-lines */
// TODO 코드 개선 필요 (너무 긴 라인수) (code bad smell)

import React, { FC, useMemo, useState, useCallback } from 'react';

import { subDays, isBefore } from 'date-fns';

import { IntersectionObserverComponent } from './IntersectionObserverComponent';
import { useStatus } from './useStatus';

import { NewsList } from '~src/view/components/NewsList';
import { endOfWeekOrMonth } from '~src/utils/date/endOfWeekOrMonth';
import { dateToString } from '~src/utils/date/dateToString';
import { startOfWeekOrMonth } from '~src/utils/date/startOfWeekOrMonth';

const MAX_START_DATE = new Date(2019, 9, 1);

interface IProps {
  isRenderCorpList?: boolean;
  isRenderLinkListItem?: boolean;
  isRenderPlatformLinkListItem?: boolean;
  excludeNewsId?: number;
  filter: INewsFilter;
  maxNoConentCount?: number;
  noConentCount?: number;
}

export const InfiniteScrollNewsList: FC<IProps> = ({
  isRenderCorpList,
  isRenderLinkListItem,
  isRenderPlatformLinkListItem,
  excludeNewsId,
  filter,
  noConentCount = 0,
  maxNoConentCount,
}) => {
  const { status, setLoading, setRendered } = useStatus();
  const [noContent, setNoContent] = useState<boolean>(false);

  const nextStartDate = useMemo(
    () => startOfWeekOrMonth(subDays(new Date(filter.startDateTime), 1)),
    [filter.startDateTime]
  );

  const nextFilter = useMemo(() => {
    return {
      ...filter,
      startDateTime: dateToString(nextStartDate, 'VALUE'),
      endDateTime: dateToString(endOfWeekOrMonth(nextStartDate), 'VALUE'),
    };
  }, [filter, nextStartDate]);

  const isNoContent = useCallback(() => {
    setNoContent(true);
  }, []);

  const nextNoContent = useMemo(() => (noContent ? noConentCount + 1 : 0), [
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
          excludeNewsId={excludeNewsId}
          onFatched={setRendered}
          onNoContent={isNoContent}
          key="newsList"
        />
      )}
      {status === 'RENDERED' &&
        (maxNoConentCount === undefined || noConentCount < maxNoConentCount) &&
        isBefore(MAX_START_DATE, nextStartDate) && (
          <InfiniteScrollNewsList
            filter={nextFilter}
            noConentCount={nextNoContent}
            maxNoConentCount={maxNoConentCount}
            excludeNewsId={excludeNewsId}
            key="nextNewsList"
          />
        )}
    </>
  );
};
