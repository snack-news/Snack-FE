// TODO 이후 API 가 많아지면 파일 분리가 필요하다.
import uberLogo from 'Resources/mock/uber-logo.png';
import linkMock from 'Resources/mock/linkMock.jpg';

export const getCompanyList = (): ICompany[] => [
  { companyName: '아마존', key: '1', logoImg: uberLogo },
  { companyName: '쿠팡', key: '2', logoImg: uberLogo },
  { companyName: '페이스북', key: '3', logoImg: uberLogo },
  { companyName: '삼성', key: '4', logoImg: uberLogo },
  { companyName: '테슬라', key: '5', logoImg: uberLogo },
  { companyName: '이커머스', key: '6', logoImg: uberLogo },
];

export const getNewsList = (): INews[] => {
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

  return newsCardListMock;
};

export const getRecommendNewsList = (): INews[] => [
  {
    title: '공유주방 스타트업 ‘고스트키친’ 21억 규모 투자유치',
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
    title: 'LG이노텍, 아이폰 트리플 카메라 위해 2800억 투자',
    content:
      '보고서에 따르면 월 별 숙박 예약 비중은 8월이 연간 예약량의 약 11.3%를 차지, 전통적인 여름여름여름여름여름여름여름여름여름여름여름여름. 여름여름여름여름여름여름여름여름여름여름여름여름여름여여름여름여름여름여름여름여름. 여름여름여름여름여름여름여름여여름. 여름여름여름여름여름여름여름여름여름여름여름여름여름여여름여름여름여름여름여름여름여름여름여름여름여름여름여름여여름여름여름여름여름여름여름여름여름여름여름여름여름여름여여름여름여름여름여름여름여름여름여름여름여름여름여름여름여름여름여름여름여름여름여름',
    tags: [{ highlight: true, children: 'TOP3', key: '1' }, { children: 'APPLE', key: '2' }],
    link: {
      href:
        'https://www.technobezz.com/apples-modem-chip-making-plans-seem-to-be-confirmed-569854/',
      title: '애플 7% 주가 상승했나? 여력있어 보여',
      img: linkMock,
    },
    key: '2',
  },
];

export const getPickNewsList = (): INews[] => [
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
