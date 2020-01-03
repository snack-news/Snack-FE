import React, { FC, useMemo } from 'react';

import { CorpNewsListPageHeader } from './Header/CorpNewsListPageHeader';

import { NewsList } from '~nclient/view/components/NewsList';
import { PageLayout } from '~nclient/view/components/PageLayout';
import { Footer } from '~nclient/view/components/Footer';
import { dateToString } from '~nclient/utils/date/dateToString';
import { startOfWeekOrMonth } from '~nclient/utils/date/startOfWeekOrMonth';
import { NOW } from '~nclient/utils/date/constants';
import { endOfWeekOrMonth } from '~nclient/utils/date/endOfWeekOrMonth';

import { useCorp } from '~nclient/hooks/useCorp';

interface IProps {
  corpId: string;
}

export const CorpNewsListPage: FC<IProps> = ({ corpId }) => {
  const startDateTime = useMemo(() => startOfWeekOrMonth(NOW), []);
  const endDateTime = useMemo(() => endOfWeekOrMonth(startDateTime), [startDateTime]);

  const startStrDateTime = useMemo(() => dateToString(startDateTime, 'VALUE'), [startDateTime]);
  const endStrDateTime = useMemo(() => dateToString(endDateTime, 'VALUE'), [endDateTime]);

  const crop = useCorp(corpId);

  if (!crop) {
    return null;
  }

  return (
    <PageLayout>
      {{
        header: <CorpNewsListPageHeader corpName={crop.name} />,
        main: (
          <NewsList
            startDateTime={startStrDateTime}
            endDateTime={endStrDateTime}
            topicIds={corpId}
          />
        ),
        footer: <Footer />,
      }}
    </PageLayout>
  );
};
