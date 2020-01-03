/* eslint-disable max-lines */
// TODO 코드 개선 필요 (너무 긴 라인수) (code bad smell)

import React, { FC, useState, ReactElement } from 'react';

import { addDays } from 'date-fns';

import { IntersectionObserverComponent } from './IntersectionObserverComponent';
import { useStatus } from './useState';

import { NewsList } from '~nclient/view/components/NewsList';
import { dateToString } from '~nclient/utils/date/dateToString';
import { startOfWeekOrMonth } from '~nclient/utils/date/startOfWeekOrMonth';

interface IProps extends INewsFilter {}

export const InfiniteScrollNewsList: FC<IProps> = ({ children, ...filter }) => {
  const { status, setLoading, setRendered } = useStatus();
  const [newsList, setNewsList] = useState<ReactElement | null>(null);
  const [nextNewsList, setNextNewsList] = useState<ReactElement | null>(null);

  if (status === 'OBSERVING') {
    return <IntersectionObserverComponent onObserve={setLoading} />;
  }

  if (status === 'LOADING') {
    if (newsList === null) {
      // eslint-disable-next-line react/jsx-props-no-spreading
      setNewsList(<NewsList {...filter} onFatched={setRendered} />);
    }
  }

  if (status === 'RENDERED') {
    const nextStartDateTime = startOfWeekOrMonth(addDays(new Date(filter.startDateTime), 1));

    setNextNewsList(
      <InfiniteScrollNewsList
        // eslint-disable-next-line react/jsx-props-no-spreading
        {...filter}
        startDateTime={dateToString(nextStartDateTime, 'VALUE')}
      />
    );
  }

  return (
    <>
      {newsList}
      {nextNewsList}
    </>
  );
};
