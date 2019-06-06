import React from 'react';
import styled from 'styled-components';

import News from './News';

import linkMock from '../../resources/linkMock.jpg';

const newsListMock = [
  {
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
    tags: [{ highlight: true, children: 'TOP3', key: '1' }, { children: 'APPLE', key: '2' }],
    link: {
      href:
        'https://www.technobezz.com/apples-modem-chip-making-plans-seem-to-be-confirmed-569854/',
      title: '사진이 없는 링크',
    },
    key: '2',
  },
  {
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

const Wrapper = styled.div``;

const NewsList = () => (
  <Wrapper>
    {newsListMock.map(newsProps => (
      <News {...newsProps} />
    ))}
  </Wrapper>
);

export default NewsList;
