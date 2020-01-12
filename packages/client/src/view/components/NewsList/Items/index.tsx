/* eslint-disable max-lines */

import React, { FC, useMemo, Fragment } from 'react';

import { CorpListItem } from './CorpListItem';
import { LinkListItem } from './LinkListItem';
import { NewsItem } from './NewsItem';
import { PlatformLinkListItem } from './PlatformLinkListItem';
import { isNews } from './isNews';

import { HorizontalDivider } from '~src/view/components/HorizontalDivider';

interface IProps {
  mainNews?: INews;
  newsList: INews[];

  isRenderCorpList?: boolean;
  isRenderLinkListItem?: boolean;
  isRenderPlatformLinkListItem?: boolean;
}

export const Items: FC<IProps> = ({
  mainNews,
  newsList,
  isRenderCorpList,
  isRenderLinkListItem,
  isRenderPlatformLinkListItem,
}) => {
  const renderNewsList = useMemo(() => {
    if (mainNews) {
      return [mainNews, ...newsList.filter(({ id }) => id !== mainNews.id)];
    }

    return newsList;
  }, [mainNews, newsList]);

  const newsComponents = useMemo(
    () =>
      renderNewsList.map(news => (
        <React.Fragment key={news.id}>
          <NewsItem news={news} />
          <HorizontalDivider thick />
        </React.Fragment>
      )),
    [renderNewsList]
  );

  if (!newsList) {
    return null;
  }

  return (
    <>
      {[
        ...newsComponents.slice(0, 3),
        isRenderCorpList && newsComponents.length >= 3 && (
          <Fragment key="CorpListItem">
            <CorpListItem />
            <HorizontalDivider thick />
          </Fragment>
        ),
        ...newsComponents.slice(3, 5),
        isRenderLinkListItem && newsComponents.length >= 5 && (
          <Fragment key="LinkListItem">
            <LinkListItem />
            <HorizontalDivider thick />
          </Fragment>
        ),
        ...newsComponents.slice(5, 6),
        isRenderPlatformLinkListItem && newsComponents.length >= 6 && (
          <Fragment key="PlatformLinkListItem">
            <PlatformLinkListItem />
            <HorizontalDivider thick />
          </Fragment>
        ),
        ...newsComponents.slice(6),
      ]}
    </>
  );
};
