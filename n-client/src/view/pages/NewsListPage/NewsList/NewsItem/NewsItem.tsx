import React, { FC } from 'react';

import { NewsHeader } from './NewsHeader';
import { NewsArticle } from './NewsArticle';
import { NewsFooter } from './NewsFooter';
import { NewsMeta } from './NewsMeta';

import { Layout } from './Layout';

interface Props {
  news: News;
}

export const NewsItem: FC<Props> = ({ news }) => (
  <Layout>
    {{
      header: <NewsHeader tags={news.tags} topics={news.topics} />,
      article: <NewsArticle title={news.title} content={news.content} />,
      meta: news.link ? <NewsMeta link={news.link} /> : null,
      footer: <NewsFooter />,
    }}
  </Layout>
);
