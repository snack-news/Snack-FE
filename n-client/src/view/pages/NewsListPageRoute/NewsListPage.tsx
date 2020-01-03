import React, { FC, useMemo } from 'react';

import { NewsListPageHeader } from './Header/NewsListPageHeader';

import { NewsList } from '~nclient/view/components/NewsList';
import { PageLayout } from '~nclient/view/components/PageLayout';
import { Footer } from '~nclient/view/components/Footer';
import { dateToString } from '~nclient/utils/date/dateToString';
import { endOfWeekOrMonth } from '~nclient/utils/date/endOfWeekOrMonth';

interface IProps {
  startDateTime: string;
}

export const NewsListPage: FC<IProps> = ({ startDateTime }) => {
  const startDate = new Date(parseInt(startDateTime, 10));
  const endDateTime = useMemo(() => endOfWeekOrMonth(startDate), [startDate]);

  const startStrDateTime = useMemo(() => dateToString(startDate, 'VALUE'), [startDate]);
  const endStrDateTime = useMemo(() => dateToString(endDateTime, 'VALUE'), [endDateTime]);

  return (
    <PageLayout>
      {{
        header: <NewsListPageHeader startDateTime={startDateTime} />,
        main: <NewsList startDateTime={startStrDateTime} endDateTime={endStrDateTime} />,
        footer: <Footer />,
      }}
    </PageLayout>
  );
};
