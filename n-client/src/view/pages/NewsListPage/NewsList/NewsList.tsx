import React, { FC } from 'react';

import { CorpListItem } from './CorpListItem';
import { NewsItem } from './NewsItem';
import { LinkListItem } from './LinkListItem';
import { PlatformLinkListItem } from './PlatformLinkListItem';
import { useNewsList } from './useNewsList';

import { HorizontalDivider } from '~nclient/view/components/HorizontalDivider';

interface Props {}

// TODO CorpListItem, LinkListItem, PlatformLinkListItem 의 순서 조정
export const NewsList: FC<Props> = () => {
  const newsList = useNewsList();

  return (
    <>
      {newsList &&
        newsList.map(news => (
          <React.Fragment key={news.id}>
            <NewsItem news={news} />
            <HorizontalDivider thick />
          </React.Fragment>
        ))}
      <CorpListItem />
      <HorizontalDivider thick />
      <LinkListItem />
      <HorizontalDivider thick />
      <PlatformLinkListItem />
    </>
  );
};

// const IntersectionObserverComponent = () => {
//   const root = useRef(null);
//   const ioOptions = {
//     root,
//     threshold: 1,
//   };
//   const observer = new IntersectionObserver(handleInfiniteScrolling, ioOptions);

//   return <div ref={root} />;
// };
