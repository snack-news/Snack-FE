import React, { Fragment } from 'react';

import { getNewsList } from 'Api/index';
import { ColListLayout } from 'Layouts/index';
import { HorizontalDivider } from 'Templates/index';
import { News } from 'Components/index';

import CompanyListCard from './CompanyListCard';
import ContactCard from './ContactCard';
import PlatformListCard from './PlatformListCard';
import RecommendNewsList from './RecommendNewsList';

const NewsList = () => {
  const newsList = getNewsList();
  const newsComponents = newsList.map(newsProps => (
    <Fragment key={newsProps.key}>
      <News {...newsProps} />
      <HorizontalDivider />
    </Fragment>
  ));

  return (
    <ColListLayout.Repeat>
      {[
        ...newsComponents.slice(0, 3),
        <Fragment key="CompanyListCard">
          <HorizontalDivider thick />
          <CompanyListCard />
          <HorizontalDivider thick />
        </Fragment>,
        ...newsComponents.slice(3, 5),
        <Fragment key="ContactCard">
          <HorizontalDivider thick />
          <ContactCard />
          <HorizontalDivider thick />
        </Fragment>,
        ...newsComponents.slice(5, 6),
        <Fragment key="PlatformListCard">
          <HorizontalDivider thick />
          <PlatformListCard />
          <HorizontalDivider thick />
        </Fragment>,
        <Fragment key="RecommendNewsList">
          <RecommendNewsList />
          <HorizontalDivider />
        </Fragment>,
        ...newsComponents.slice(6),
      ]}
    </ColListLayout.Repeat>
  );
};

export default NewsList;
