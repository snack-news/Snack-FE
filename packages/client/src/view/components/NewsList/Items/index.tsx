/* eslint-disable max-lines */
// TODO 코드 개선 필요 (너무 긴 라인수) (code bad smell)

import React, { FC, useMemo, Fragment } from 'react';

import { CorpListItem } from './CorpListItem';
import { LinkListItem } from './LinkListItem';
import { PlatformLinkListItem } from './PlatformLinkListItem';

import { HorizontalDivider } from '~src/view/components/HorizontalDivider';
import { NewsItem } from '~src/view/components/NewsItem/index';

interface IProps {
  newsList: INews[];

  isRenderCorpList?: boolean;
  isRenderLinkListItem?: boolean;
  isRenderPlatformLinkListItem?: boolean;
}

export const Items: FC<IProps> = ({
  newsList,
  isRenderCorpList,
  isRenderLinkListItem,
  isRenderPlatformLinkListItem,
}) => {
  const newsComponents = useMemo(
    () =>
      newsList.map(news => (
        <React.Fragment key={news.id}>
          <NewsItem news={news} />
          <HorizontalDivider thick />
        </React.Fragment>
      )),
    [newsList]
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
