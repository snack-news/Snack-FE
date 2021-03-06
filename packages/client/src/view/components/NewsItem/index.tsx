import React, { FC } from 'react';
import styled from 'styled-components';

import { NewsLabelList } from './NewsLabelList';
import { NewsArticle } from './NewsArticle';
import { NewsFooter } from './NewsFooter';
import { NewsMeta } from './NewsMeta';

import { HorizontalDivider } from '~src/view/components/HorizontalDivider';

// TODO newsId 만 받아서 출력하는 형태로. 성능이슈는 service worker를 통해 cache를 활용하여 해결

interface IProps {
  news: INews;
}

export const NewsItem: FC<IProps> = ({ news }) => (
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
