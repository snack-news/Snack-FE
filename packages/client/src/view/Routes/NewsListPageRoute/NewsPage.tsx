/* eslint-disable max-lines, react/jsx-max-depth */
// TODO 코드 개선 필요 (너무 긴 라인수) (code bad smell)

import React, { FC, useMemo } from 'react';

import { NewsListPageHeader } from './Header/NewsListPageHeader';

import { FilterContextProvider } from '../../../hooks/useFilter/FilterContext';

import { InfiniteScrollNewsList } from '~src/view/components/InfiniteScrollNewsList';
import { PageLayout } from '~src/view/components/PageLayout';
import { Footer } from '~src/view/components/Footer';
import { dateToString } from '~src/utils/date/dateToString';
import { endOfWeekOrMonth } from '~src/utils/date/endOfWeekOrMonth';
import { startOfWeekOrMonth } from '~src/utils/date/startOfWeekOrMonth';
import { NOW } from '~src/utils/date/constants';
import { NewsItem } from '~src/view/components/NewsItem';
import { useNews } from '~src/hooks/useNews';

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

  const newsId = parseInt(mainNewsId, 10);
  const news = useNews(newsId);

  return (
    <>
      <PageLayout>
        {{
          header: <NewsListPageHeader startDateTime={`${startDateTime.getTime()}`} />,
          main: (
            <>
              {news && <NewsItem news={news} />}
              <FilterContextProvider filter={filter}>
                <InfiniteScrollNewsList
                  excludeNewsId={newsId}
                  isRenderCorpList
                  isRenderLinkListItem
                  isRenderPlatformLinkListItem
                />
              </FilterContextProvider>
            </>
          ),
          footer: <Footer />,
        }}
      </PageLayout>
    </>
  );
};
