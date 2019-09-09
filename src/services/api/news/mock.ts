/* eslint-disable max-lines */

export const newsListMock = [
  {
    createAt: '2019-08-21T00:00:00',
    modifiedAt: '2019-08-21T00:00:00',
    id: 34,
    title: '34 news title',
    content: 'news content: IT/카카오/TOP10',
    link: null,
    category: {
      id: 1,
      title: 'IT',
    },
    topics: [
      {
        id: 1,
        type: 'CORP',
        name: '카카오',
        image: null,
      },
      {
        id: 2,
        type: 'CORP',
        name: '애플',
        image: null,
      },
    ],
    tags: [
      {
        id: 1,
        title: 'TOP10',
      },
    ],
  },
  {
    createAt: '2019-07-21T00:00:00',
    modifiedAt: '2019-07-21T00:00:00',
    id: 5,
    title: '07 news title',
    content: 'news content: IT/애플/[none]',
    link: null,
    category: {
      id: 1,
      title: 'IT',
    },
    topics: [
      {
        id: 2,
        type: 'CORP',
        name: '애플',
        image: null,
      },
    ],
    tags: [],
  },
  {
    createAt: '2019-07-21T00:00:00',
    modifiedAt: '2019-07-21T00:00:00',
    id: 7,
    title: '09 news title',
    content: 'news content: IT/애플/HOT',
    link: null,
    category: {
      id: 1,
      title: 'IT',
    },
    topics: [
      {
        id: 2,
        type: 'CORP',
        name: '애플',
        image: null,
      },
    ],
    tags: [
      {
        id: 2,
        title: 'HOT',
      },
    ],
  },
];
