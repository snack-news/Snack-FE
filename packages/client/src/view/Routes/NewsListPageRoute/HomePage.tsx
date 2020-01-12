import React, { FC, useMemo } from 'react';

import { NewsListPageHeader } from './Header/NewsListPageHeader';

import { NewsList } from '~src/view/components/NewsList';
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

  return (
    <PageLayout>
      {{
        header: <NewsListPageHeader startDateTime={`${startDateTime.getTime()}`} />,
        main: <NewsList startDateTime={startStrDateTime} endDateTime={endStrDateTime} />,
        footer: <Footer />,
      }}
    </PageLayout>
  );
};
