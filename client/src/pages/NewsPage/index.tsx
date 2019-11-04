import React, { FC } from 'react';

import { RouteComponentProps } from 'react-router';

import { NewsListPage } from '~client/pages/index';
import { getWeekDate } from '~client/utils';

export const NewsPage: FC<RouteComponentProps> = props => {
  return (
    <NewsListPage
      filter={getWeekDate(new Date())}
      newsId={props.match.params.newsId}
    />
  );
};
