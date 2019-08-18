import React, { FunctionComponent } from 'react';

import { NewsList, Header, HorizontalDivider, CompanyListCard, Footer } from 'Templates/index';

import { PageLayout } from 'Layouts/index';
import useCorpList from 'Hooks/useCorpList';

interface ICompanyNewsListPageProps {
  corpId: number;
}

export const CompanyNewsListPage: FunctionComponent<ICompanyNewsListPageProps> = ({ corpId }) => {
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
              newsOptionProps={{ isRenderWeekNumberOfMonth: true }}
              filter={{ year: '2019', month: '8', week: '4', topicIds: [corpId] }}
            />
            <HorizontalDivider thick />
            <CompanyListCard excludeCropId={corpId} />
            <HorizontalDivider thick />
          </>
        ),
        footer: <Footer />,
      }}
    </PageLayout>
  );
};
