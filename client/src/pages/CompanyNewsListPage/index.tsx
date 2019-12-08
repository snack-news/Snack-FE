import React, { FunctionComponent } from 'react';

import {
  NewsList,
  Header,
  HorizontalDivider,
  Footer,
} from '~client/templates/index';

import { PageLayout } from '~client/layouts/index';
import useCorpList from '~client/hooks/useCorpList';
import { getWeekDate } from '~client/utils';

interface ICompanyNewsListPageProps {
  corpId: number;
}

export const CompanyNewsListPage: FunctionComponent<
  ICompanyNewsListPageProps
> = ({ corpId }) => {
  const [corpListState] = useCorpList();
  if (corpListState.status !== 'success') {
    return null;
  }
  const corp = corpListState.corpList.find(({ id }) => id === corpId);

  if (corp === undefined) {
    return null;
  }

  return (
    <PageLayout>
      {{
        header: (
          <>
            <Header title={`${corp.name} 뉴스 모아보기`} />
            <HorizontalDivider />
            {/* TODO label 들어갈 자리 */}
            <HorizontalDivider thick />
          </>
        ),
        body: (
          <>
            <NewsList
              isInfiniteScroll
              newsOptionProps={{ isRenderWeekNumberOfMonth: true }}
              companyListCardProps={{ excludeCropId: corpId }}
              isRenderCompanyListCard
              filter={{ ...getWeekDate(new Date()), topicIds: [corpId] }}
            />
          </>
        ),
        footer: <Footer />,
      }}
    </PageLayout>
  );
};
