import React, { Fragment } from 'react';

import { getNewsList } from 'Api/index';
import { ColListLayout } from 'Layouts/index';
import { HorizontalDivider } from 'Templates/index';

import CompanyListCard from './CompanyListCard';
import ContactCard from './ContactCard';
import PlatformListCard from './PlatformListCard';
import NewsCard from './NewsCard';

const NewsList = () => {
  const newsList = getNewsList();
  const newsCardComponents = newsList.map(newsCardProps => (
    <Fragment key={newsCardProps.key}>
      <NewsCard {...newsCardProps} />
      <HorizontalDivider />,
    </Fragment>
  ));

  return (
    <ColListLayout.Repeat>
      {[
        ...newsCardComponents.slice(0, 3),
        <Fragment key="CompanyListCard">
          <HorizontalDivider thick />
          <CompanyListCard />
          <HorizontalDivider thick />
        </Fragment>,
        ...newsCardComponents.slice(3, 5),
        <Fragment key="ContactCard">
          <HorizontalDivider thick />
          <ContactCard />
          <HorizontalDivider thick />
        </Fragment>,
        ...newsCardComponents.slice(5, 6),
        <Fragment key="PlatformListCard">
          <HorizontalDivider thick />
          <PlatformListCard />
          <HorizontalDivider thick />
        </Fragment>,
        ...newsCardComponents.slice(6),
      ]}
    </ColListLayout.Repeat>
  );
};

export default NewsList;
