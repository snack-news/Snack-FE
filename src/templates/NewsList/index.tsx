import React, { Fragment, FunctionComponent, useState, useEffect } from 'react';

import { ColListLayout } from 'Layouts/index';
import { HorizontalDivider, CompanyListCard, RecommendNewsList } from 'Templates/index';
import { News, INewsOptionProps, ContactCard, PlatformListCard } from 'Components/index';
import { ICompanyListCardProps } from 'Templates/CompanyListCard';
import useNewsList, { IFilter } from 'Hooks/useNewsList';
import { getWeekDate } from 'Utils';

interface INewsListProps {
  newsOptionProps?: INewsOptionProps;
  isRenderCompanyListCard?: boolean;
  isRenderContactCard?: boolean;
  isRenderPlatformListCard?: boolean;
  isRenderRecommendNewsList?: boolean;
  companyListCardProps?: ICompanyListCardProps;
  filter: IFilter;
}

const BOTTOM_MARGIN = 800;

const isBottom = (margin: number) =>
  window.innerHeight + window.scrollY >= document.body.offsetHeight - margin;

const useNewsListState = (initialFilter: IFilter) => {
  const [filter, setFilter] = useState(initialFilter);
  const [latestNewsListState] = useNewsList(filter);
  const [newsList, setNewsList] = useState<INews[]>([]);

  const nextNewsList = () => {
    setFilter(oldFilter => {
      const oldFilterDate = new Date(
        parseInt(oldFilter.year, 10),
        parseInt(oldFilter.month, 10) - 1,
        (parseInt(oldFilter.week, 10) - 1) * 7 + 1
      );
      const filterDate = new Date(oldFilterDate.getTime() - 1000 * 60 * 60 * 24 * 7);

      return {
        ...oldFilter,
        ...getWeekDate(filterDate),
      };
    });
  };

  useEffect(() => {
    if (latestNewsListState.status !== 'pending') {
      if (latestNewsListState.newsList.length === 0) {
        nextNewsList();
      } else {
        setNewsList(oldNewsList => [...oldNewsList, ...latestNewsListState.newsList]);
      }
    }
  }, [latestNewsListState.newsList, latestNewsListState.status]);

  useEffect(() => {
    const onScroll = () => {
      if (
        isBottom(BOTTOM_MARGIN) &&
        latestNewsListState.status !== 'pending' &&
        latestNewsListState.newsList.length > 0
      ) {
        nextNewsList();
        window.removeEventListener('scroll', onScroll);
      }
    };
    window.addEventListener('scroll', onScroll);
    return () => {
      window.removeEventListener('scroll', onScroll);
    };
  }, [latestNewsListState.newsList, latestNewsListState.status]);

  return newsList;
};

export const NewsList: FunctionComponent<INewsListProps> & {
  defaultProps: Partial<INewsListProps>;
} = props => {
  const {
    newsOptionProps,
    isRenderCompanyListCard,
    isRenderContactCard,
    isRenderPlatformListCard,
    isRenderRecommendNewsList,
    companyListCardProps,
    filter: initialFilter,
  } = props;

  const newsList = useNewsListState(initialFilter);

  const newsComponents = newsList.map(newsProps => (
    <Fragment key={newsProps.key}>
      <News {...newsProps} {...newsOptionProps} />
      <HorizontalDivider thick />
    </Fragment>
  ));

  return (
    <ColListLayout.Repeat>
      {[
        ...newsComponents.slice(0, 3),
        isRenderCompanyListCard && newsComponents.length >= 3 && (
          <Fragment key="CompanyListCard">
            <HorizontalDivider thick />
            <CompanyListCard {...companyListCardProps} />
            <HorizontalDivider thick />
          </Fragment>
        ),
        ...newsComponents.slice(3, 5),
        isRenderContactCard && newsComponents.length >= 5 && (
          <Fragment key="ContactCard">
            <HorizontalDivider thick />
            <ContactCard />
            <HorizontalDivider thick />
          </Fragment>
        ),
        ...newsComponents.slice(5, 6),
        isRenderPlatformListCard && newsComponents.length >= 6 && (
          <Fragment key="PlatformListCard">
            <HorizontalDivider thick />
            <PlatformListCard />
            <HorizontalDivider thick />
          </Fragment>
        ),
        isRenderRecommendNewsList && newsComponents.length >= 6 && (
          <Fragment key="RecommendNewsList">
            <RecommendNewsList />
            <HorizontalDivider thick />
          </Fragment>
        ),
        ...newsComponents.slice(6),
      ]}
    </ColListLayout.Repeat>
  );
};

NewsList.defaultProps = {
  isRenderCompanyListCard: false,
  isRenderContactCard: false,
  isRenderPlatformListCard: false,
  isRenderRecommendNewsList: false,
};
