/* eslint-disable max-lines */
// TODO 코드 개선 필요 (너무 긴 라인수) (code bad smell)

import React, { FC, useMemo } from 'react';

import { CorpNewsListPageHeader } from './Header/CorpNewsListPageHeader';

import { NewsList } from '~src/view/components/NewsList';
import { PageLayout } from '~src/view/components/PageLayout';
import { Footer } from '~src/view/components/Footer';
import { dateToString } from '~src/utils/date/dateToString';
import { startOfWeekOrMonth } from '~src/utils/date/startOfWeekOrMonth';
import { NOW } from '~src/utils/date/constants';
import { endOfWeekOrMonth } from '~src/utils/date/endOfWeekOrMonth';

import { useCorp } from '~src/hooks/useCorp';

interface IProps {
  corpId: string;
}

export const CorpNewsListPage: FC<IProps> = ({ corpId }) => {
  const startDateTime = useMemo(() => startOfWeekOrMonth(NOW), []);
  const endDateTime = useMemo(() => endOfWeekOrMonth(startDateTime), [startDateTime]);

  const startStrDateTime = useMemo(() => dateToString(startDateTime, 'VALUE'), [startDateTime]);
  const endStrDateTime = useMemo(() => dateToString(endDateTime, 'VALUE'), [endDateTime]);

  const crop = useCorp(corpId);
  const filter = useMemo<INewsFilter>(
    () => ({ startDateTime: startStrDateTime, endDateTime: endStrDateTime, topicIds: corpId }),
    [corpId, endStrDateTime, startStrDateTime]
  );

  if (!crop) {
    return null;
  }

  return (
    <PageLayout>
      {{
        header: <CorpNewsListPageHeader corpName={crop.name} />,
        main: <NewsList filter={filter} />,
        footer: <Footer />,
      }}
    </PageLayout>
  );
};
