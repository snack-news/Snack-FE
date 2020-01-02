import React, { FC } from 'react';
import { useRouteMatch } from 'react-router';

import { CorpNewsListPageHeader } from './Header';
import { CorpNewsListPageMain } from './Main';

import { useCorp } from './useCorp';

import { PageLayout } from '~nclient/view/components/PageLayout';
import { Footer } from '~nclient/view/components/Footer';

interface URLParams {
  corpId?: string;
}

interface Props {}

export const CorpNewsListPage: FC<Props> = () => {
  const match = useRouteMatch<URLParams>(['/newslist/corp/:corpId']);
  const corp = useCorp(match && match.params.corpId);

  if (!match || !match.isExact || !corp || !match.params.corpId) {
    return null;
  }

  console.log('corp.name', corp.name);

  return (
    <PageLayout>
      {{
        header: <CorpNewsListPageHeader corpName={corp.name} />,
        main: <CorpNewsListPageMain corpId={match.params.corpId} />,
        // main: <></>,
        footer: <Footer />,
      }}
    </PageLayout>
  );
};
