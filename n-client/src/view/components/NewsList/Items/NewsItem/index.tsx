import React, { FC } from 'react';

import styled from 'styled-components';

import { NewsLabelList } from './NewsLabelList';
import { NewsArticle } from './NewsArticle';
import { NewsFooter } from './NewsFooter';
import { NewsMeta } from './NewsMeta';

import { HorizontalDivider } from '~nclient/view/components/HorizontalDivider';

interface Props {
  news: News;
}

export const NewsItem: FC<Props> = ({ news }) => (
  <Wrapper>
    <NewsLabelList tags={news.tags} topics={news.topics} />
    <NewsArticle title={news.title} content={news.content} />
    {news.link ? <NewsMeta link={news.link} /> : null}
    <HorizontalDivider style={{ margin: '0 20px 0 20px' }} />
    <NewsFooter newsId={news.id} />
  </Wrapper>
);

const Wrapper = styled.section`
  margin: 20px 0 6px 0;
`;
