import React, { FC } from 'react';
import { useRouteMatch } from 'react-router';

import { NewsListPageHeader } from './Header';
import { NewsListPageMain } from './Main/index';

import { PageLayout } from '~nclient/view/components/PageLayout';
import { Footer } from '~nclient/view/components/Footer';
import { homePath } from '~nclient/constants/paths';

// {/* <Route path="/newslist/week/:startDateTime" exact component={NewsListPage} /> */}
// {/* <Route path="/newslist/corp/:corpId" exact component={NewsListPage} /> */}

// {/* <Route path="/newslist/:year/:month/week/:week" exact component={NewsListPage} /> */}
// {/* <Route path="/corp/:corpId" component={NewsListPage} /> */}

interface URLParams {
  startDateTime?: string;
  corpId?: string;
}

interface Props {}

export const NewsListPage: FC<Props> = () => {
  const match = useRouteMatch<URLParams>(['/newslist/week/:startDateTime', homePath]);

  if (!match || !match.isExact) {
    return null;
  }

  return (
    <PageLayout>
      {{
        header: <NewsListPageHeader startDateTime={match.params.startDateTime} />,
        main: (
          <NewsListPageMain
            startDateTime={match.params.startDateTime}
            corpId={match.params.corpId}
          />
        ),
        footer: <Footer />,
      }}
    </PageLayout>
  );
};
