/* eslint-disable max-lines */
// TODO 코드 개선 필요 (너무 긴 라인수) (code bad smell)

import React, { FC } from 'react';
import { useRouteMatch } from 'react-router';

import { HomePage } from './HomePage';
import { NewsListPage } from './NewsListPage';
import { NewsPage } from './NewsPage';
import { CorpNewsListPage } from './CorpNewsListPage';

import { HOME_PATH } from '~src/constants/paths';

interface IHomeURLParams {}

interface INewsListURLParams {
  startDateTime: string;
}

interface INewsURLParams {
  mainNewsId: string;
}

interface ICorpNewsListURLParams {
  corpId: string;
}

interface IProps {}

export const NewsListPageRoute: FC<IProps> = () => {
  const homeMatch = useRouteMatch<IHomeURLParams>([HOME_PATH]);
  // TODO path 상수화..?
  const newsListMatch = useRouteMatch<INewsListURLParams>(['/newslist/week/:startDateTime']);
  const newsMatch = useRouteMatch<INewsURLParams>(['/newslist/news/:mainNewsId']);
  const corpNewsListMatch = useRouteMatch<ICorpNewsListURLParams>(['/newslist/corp/:corpId']);

  if (homeMatch && homeMatch.isExact) {
    return <HomePage />;
  }

  if (newsListMatch && newsListMatch.isExact) {
    return <NewsListPage startDateTime={newsListMatch.params.startDateTime} />;
  }

  if (newsMatch && newsMatch.isExact) {
    return <NewsPage mainNewsId={newsMatch.params.mainNewsId} />;
  }

  if (corpNewsListMatch && corpNewsListMatch.isExact) {
    return <CorpNewsListPage corpId={corpNewsListMatch.params.corpId} />;
  }

  return null;
};
