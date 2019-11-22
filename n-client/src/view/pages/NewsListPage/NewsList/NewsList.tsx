import React from 'react';

import { NewsItem } from './NewsItem';

import { HorizontalDivider } from '~nclient/view/atoms/Figures/HorizontalDivider';

interface Props {
  newsList: News[];
}

export const NewsList: React.FC<Props> = ({ newsList }) => {
  return (
    <>
      {newsList.map(news => (
        <>
          <NewsItem news={news} />
          <HorizontalDivider thick />
        </>
      ))}
    </>
  );
};
