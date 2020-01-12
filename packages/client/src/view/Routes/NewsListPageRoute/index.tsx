import React, { FC } from 'react';
import { useRouteMatch } from 'react-router';

import { HomePage } from './HomePage';
import { NewsListPage } from './NewsListPage';
import { CorpNewsListPage } from './CorpNewsListPage';

import { HOME_PATH } from '~src/constants/paths';

interface IHomeURLParams {}

interface INewsListURLParams {
  startDateTime: string;
}

interface ICorpNewsListURLParams {
  corpId: string;
}

interface IProps {}

export const NewsListPageRoute: FC<IProps> = () => {
  const homeMatch = useRouteMatch<IHomeURLParams>([HOME_PATH]);
  // TODO path 상수화..?
  const newsListMatch = useRouteMatch<INewsListURLParams>(['/newslist/week/:startDateTime']);
  const corpNewsListMatch = useRouteMatch<ICorpNewsListURLParams>(['/newslist/corp/:corpId']);

  if (homeMatch && homeMatch.isExact) {
    return <HomePage />;
  }

  if (newsListMatch && newsListMatch.isExact) {
    return <NewsListPage startDateTime={newsListMatch.params.startDateTime} />;
  }

  if (corpNewsListMatch && corpNewsListMatch.isExact) {
    return <CorpNewsListPage corpId={corpNewsListMatch.params.corpId} />;
  }

  return null;
};
