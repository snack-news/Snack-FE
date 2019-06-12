import React from 'react';
import styled from 'styled-components';

import CompanyListCard from './CompanyListCard';
import ContactCard from './ContactCard';
import SocialListCard from './SocialListCard';
import NewsCard from './NewsCard';

import linkMock from '../../resources/linkMock.jpg';

let newsCardListMock = [
  {
    title: '애플 주가 7% 상승',
    content:
      '보고서에 따르면 월 별 숙박 예약 비중은 8월이 연간 예약량의 약 11.3%를 차지, 전통적인 여름여름여름여름여름여름여름여름여름여름여름여름. 여름여름여름여름여름여름여름여름여름여름여름여름여름여여름여름여름여름여름여름여름. 여름여름여름여름여름여름여름여여름. 여름여름여름여름여름여름여름여름여름여름여름여름여름여여름여름여름여름여름여름여름여름여름여름여름여름여름여름여여름여름여름여름여름여름여름여름여름여름여름여름여름여름여여름여름여름여름여름여름여름여름여름여름여름여름여름여름여름여름여름여름여름여름여름',
    tags: [{ highlight: true, children: 'TOP3', key: '1' }, { children: 'APPLE', key: '2' }],
    link: {
      href:
        'https://www.technobezz.com/apples-modem-chip-making-plans-seem-to-be-confirmed-569854/',
      title: '애플 7% 주가 상승했나? 여력있어 보여',
      img: linkMock,
    },
    key: '1',
  },
  {
    title:
      '긴 구글 제목 제목 제목 제목 제목 제목 제목 제목 제목 제목 제목 제목 제목 제목 제목 제목 제목 제목 제목 제목 제목 제목',
    content:
      '보고서에 따르면 월 별 숙박 예약 비중은 8월이 연간 예약량의 약 11.3%를 차지, 전통적인 여름여름여름여름여름여름여름여름여름여름여름여름. 여름여름여름여름여름여름여름여름여름여름여름여름여름여여름여름여름여름여름여름여름. 여름여름여름여름여름여름여름여여름. 여름여름여름여름여름여름여름여름여름여름여름여름여름여여름여름여름여름여름여름여름여름여름여름여름여름여름여름여여름여름여름여름여름여름여름여름여름여름여름여름여름여름여여름여름여름여름여름여름여름여름여름여름여름여름여름여름여름여름여름여름여름여름여름',
    tags: [{ children: 'GOOGLE', key: '1' }],
    link: {
      href:
        'https://www.technobezz.com/apples-modem-chip-making-plans-seem-to-be-confirmed-569854/',
      title: '사진이 없는 링크',
    },
    key: '2',
  },
  {
    title: '애플 주가 7% 상승',
    content:
      '보고서에 따르면 월 별 숙박 예약 비중은 8월이 연간 예약량의 약 11.3%를 차지, 전통적인 여름여름여름여름여름여름여름여름여름여름여름여름. 여름여름여름여름여름여름여름여름여름여름여름여름여름여여름여름여름여름여름여름여름. 여름여름여름여름여름여름여름여여름. 여름여름여름여름여름여름여름여름여름여름여름여름여름여여름여름여름여름여름여름여름여름여름여름여름여름여름여름여여름여름여름여름여름여름여름여름여름여름여름여름여름여름여여름여름여름여름여름여름여름여름여름여름여름여름여름여름여름여름여름여름여름여름여름',
    tags: [{ highlight: true, children: 'TOP3', key: '1' }, { children: 'APPLE', key: '2' }],
    link: {
      href:
        'https://www.technobezz.com/apples-modem-chip-making-plans-seem-to-be-confirmed-569854/',
      title: '애플 7% 주가 상승했나? 여력있어 보여',
      img: linkMock,
    },
    key: '3',
  },
];

newsCardListMock = [
  ...newsCardListMock,
  ...newsCardListMock,
  ...newsCardListMock,
  ...newsCardListMock,
  ...newsCardListMock,
  ...newsCardListMock,
  ...newsCardListMock,
  ...newsCardListMock,
  ...newsCardListMock,
  ...newsCardListMock,
].map((news, key) => ({ ...news, key: `${key}` }));

const Wrapper = styled.div``;

const NewsList = () => {
  const newsCardComponents = newsCardListMock.map(newsCardProps => <NewsCard {...newsCardProps} />);

  const body = [
    ...newsCardComponents.slice(0, 3),
    <CompanyListCard key="CompanyListCard" />,
    ...newsCardComponents.slice(3, 5),
    <ContactCard key="ContactCard" />,
    ...newsCardComponents.slice(5, 6),
    <SocialListCard key="SocialListCard" />,
    ...newsCardComponents.slice(6),
  ];

  return <Wrapper>{body}</Wrapper>;
};

export default NewsList;
