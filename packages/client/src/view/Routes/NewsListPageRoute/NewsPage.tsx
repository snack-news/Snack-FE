import React, { FC, useMemo } from 'react';

import { NewsListPageHeader } from './Header/NewsListPageHeader';

import { NewsList } from '~src/view/components/NewsList';
import { PageLayout } from '~src/view/components/PageLayout';
import { Footer } from '~src/view/components/Footer';
import { dateToString } from '~src/utils/date/dateToString';
import { endOfWeekOrMonth } from '~src/utils/date/endOfWeekOrMonth';
import { startOfWeekOrMonth } from '~src/utils/date/startOfWeekOrMonth';
import { NOW } from '~src/utils/date/constants';

interface IProps {
  mainNewsId: string;
}

export const NewsPage: FC<IProps> = ({ mainNewsId }) => {
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
        main: <NewsList filter={filter} mainNewsId={mainNewsId} />,
        footer: <Footer />,
      }}
    </PageLayout>
  );
};
