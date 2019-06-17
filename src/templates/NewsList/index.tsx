import React from 'react';
import styled from 'styled-components';

import { getNewsList } from 'Api/index';
import { ColListLayout } from 'Layouts/index';
import { HorizontalDivider } from 'Templates/index';

import CompanyListCard from './CompanyListCard';
import ContactCard from './ContactCard';
import PlatformListCard from './PlatformListCard';
import NewsCard from './NewsCard';

const Wrapper = styled(ColListLayout.Repeat)``;

const NewsList = () => {
  const newsList = getNewsList();
  const newsCardComponents = newsList.map(newsCardProps => <NewsCard {...newsCardProps} />);

  const body = [
    ...newsCardComponents.slice(0, 3),
    <HorizontalDivider thick />,
    <CompanyListCard key="CompanyListCard" />,
    <HorizontalDivider thick />,
    ...newsCardComponents.slice(3, 5),
    <HorizontalDivider thick />,
    <ContactCard key="ContactCard" />,
    <HorizontalDivider thick />,
    ...newsCardComponents.slice(5, 6),
    <HorizontalDivider thick />,
    <PlatformListCard key="PlatformListCard" />,
    <HorizontalDivider thick />,
    ...newsCardComponents.slice(6),
  ];

  return <Wrapper>{body}</Wrapper>;
};

export default NewsList;
