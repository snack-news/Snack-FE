import resources from './resources';

export default {
  tabs: {
    tabs: [
      {
        id: '1',
        label: 'News',
      },
      {
        id: '2',
        label: 'Picks',
      },
    ],
    selectedId: '1',
  },
  footerLinks: [
    { children: '서비스 안내', key: '1' },
    { children: '제안하기', key: '2' },
    { children: '문의하기', key: '3' },
  ],
  socialList: [
    {
      key: '1',
      src: resources.facebookImg,
    },
    {
      key: '2',
      src: resources.twitterImg,
    },
    {
      key: '3',
      src: resources.kakaoImg,
    },
    {
      key: '4',
      src: resources.emailImg,
    },
  ],
};
