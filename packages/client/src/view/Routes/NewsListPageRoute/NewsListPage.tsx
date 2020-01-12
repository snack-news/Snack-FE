import React, { FC, useMemo } from 'react';

import { NewsListPageHeader } from './Header/NewsListPageHeader';

import { InfiniteScrollNewsList } from '~src/view/components/InfiniteScrollNewsList';
import { PageLayout } from '~src/view/components/PageLayout';
import { Footer } from '~src/view/components/Footer';
import { dateToString } from '~src/utils/date/dateToString';
import { endOfWeekOrMonth } from '~src/utils/date/endOfWeekOrMonth';

interface IProps {
  startDateTime: string;
}

export const NewsListPage: FC<IProps> = ({ startDateTime }) => {
  const startDate = new Date(parseInt(startDateTime, 10));
  const endDateTime = useMemo(() => endOfWeekOrMonth(startDate), [startDate]);

  const startStrDateTime = useMemo(() => dateToString(startDate, 'VALUE'), [startDate]);
  const endStrDateTime = useMemo(() => dateToString(endDateTime, 'VALUE'), [endDateTime]);

  const filter = useMemo<INewsFilter>(
    () => ({ startDateTime: startStrDateTime, endDateTime: endStrDateTime }),
    [endStrDateTime, startStrDateTime]
  );

  return (
    <PageLayout>
      {{
        header: <NewsListPageHeader startDateTime={startDateTime} />,
        main: (
          <InfiniteScrollNewsList
            filter={filter}
            isRenderCorpList
            isRenderLinkListItem
            isRenderPlatformLinkListItem
          />
        ),
        footer: <Footer />,
      }}
    </PageLayout>
  );
};
