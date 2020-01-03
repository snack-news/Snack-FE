import React, { FC, useMemo } from 'react';

import { NewsListPageHeader } from './Header/NewsListPageHeader';

import { NewsList } from '~nclient/view/components/NewsList';
import { PageLayout } from '~nclient/view/components/PageLayout';
import { Footer } from '~nclient/view/components/Footer';
import { dateToString } from '~nclient/utils/date/dateToString';
import { startOfWeekOrMonth } from '~nclient/utils/date/startOfWeekOrMonth';
import { NOW } from '~nclient/utils/date/constants';
import { endOfWeekOrMonth } from '~nclient/utils/date/endOfWeekOrMonth';

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
