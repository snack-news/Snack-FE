import React, { Fragment, FunctionComponent } from 'react';

import { getNewsList } from 'Api/index';
import { ColListLayout } from 'Layouts/index';
import { HorizontalDivider, CompanyListCard, RecommendNewsList } from 'Templates/index';
import { News, INewsOptionProps, ContactCard, PlatformListCard } from 'Components/index';
import { ICompanyListCardProps } from 'Templates/CompanyListCard';

interface INewsListProps {
  newsOptionProps?: INewsOptionProps;
  isRenderCompanyListCard?: boolean;
  isRenderContactCard?: boolean;
  isRenderPlatformListCard?: boolean;
  isRenderRecommendNewsList?: boolean;
  companyListCardProps?: ICompanyListCardProps;
}

const NEWS_LIST_DEFAULT_PROPS = {
  isRenderCompanyListCard: false,
  isRenderContactCard: false,
  isRenderPlatformListCard: false,
  isRenderRecommendNewsList: false,
};

export const NewsList: FunctionComponent<INewsListProps> = props => {
  const {
    newsOptionProps,
    isRenderCompanyListCard,
    isRenderContactCard,
    isRenderPlatformListCard,
    isRenderRecommendNewsList,
    companyListCardProps,
  } = { ...NEWS_LIST_DEFAULT_PROPS, ...props };
  const newsList = getNewsList();
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
        isRenderCompanyListCard && (
          <Fragment key="CompanyListCard">
            <HorizontalDivider thick />
            <CompanyListCard {...companyListCardProps} />
            <HorizontalDivider thick />
          </Fragment>
        ),
        ...newsComponents.slice(3, 5),
        isRenderContactCard && (
          <Fragment key="ContactCard">
            <HorizontalDivider thick />
            <ContactCard />
            <HorizontalDivider thick />
          </Fragment>
        ),
        ...newsComponents.slice(5, 6),
        isRenderPlatformListCard && (
          <Fragment key="PlatformListCard">
            <HorizontalDivider thick />
            <PlatformListCard />
            <HorizontalDivider thick />
          </Fragment>
        ),
        isRenderRecommendNewsList && (
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
