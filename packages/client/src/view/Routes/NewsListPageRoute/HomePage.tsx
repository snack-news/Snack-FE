/* eslint-disable max-lines */
// TODO 코드 개선 필요 (너무 긴 라인수) (code bad smell)

import React, { FC, useMemo } from 'react';

import { NewsListPageHeader } from './Header/NewsListPageHeader';

import { InfiniteScrollNewsList } from '~src/view/components/InfiniteScrollNewsList';
import { PageLayout } from '~src/view/components/PageLayout';
import { Footer } from '~src/view/components/Footer';
import { dateToString } from '~src/utils/date/dateToString';
import { startOfWeekOrMonth } from '~src/utils/date/startOfWeekOrMonth';
import { NOW } from '~src/utils/date/constants';
import { endOfWeekOrMonth } from '~src/utils/date/endOfWeekOrMonth';

interface IProps {}

export const HomePage: FC<IProps> = () => {
  const startDateTime = useMemo(() => startOfWeekOrMonth(NOW), []);
  const endDateTime = useMemo(() => endOfWeekOrMonth(startDateTime), [startDateTime]);

  const startStrDateTime = useMemo(() => dateToString(startDateTime, 'VALUE'), [startDateTime]);
  const endStrDateTime = useMemo(() => dateToString(endDateTime, 'VALUE'), [endDateTime]);

  const filter = useMemo<INewsFilter>(
    () => ({ startDateTime: startStrDateTime, endDateTime: endStrDateTime }),
    [endStrDateTime, startStrDateTime]
  );

  return (
    <PageLayout>
      {{
        header: <NewsListPageHeader startDateTime={`${startDateTime.getTime()}`} />,
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
