export const tabs = [
  {
    label: 'News',
    key: 'News',
  },
  {
    label: 'Picks',
    key: 'Picks',
  },
];

export const footerLinks = [
  { children: '서비스 안내', key: '1' },
  { children: '제안하기', key: '2' },
  { children: '문의하기', key: '3' },
];

export const externalLinks = {
  facebook: {
    link: 'https://www.facebook.com/',
  },
  twitter: {
    link: 'https://www.facebook.com/',
  },
  kakao: {
    link: 'https://www.facebook.com/',
  },
  linkedin: {
    link: 'https://www.facebook.com/',
  },
  email: {
    link: 'https://www.facebook.com/',
  },
};

export const platformList = [
  {
    platformName: 'Facebook',
    backgroundColor: '#33599d',
    link: externalLinks.facebook.link,
  },
  {
    platformName: 'KakaoTalk',
    backgroundColor: '#fae100',
    color: '#121111',
    link: externalLinks.kakao.link,
  },
  {
    platformName: 'Twitter',
    backgroundColor: '#38a1f3',
    link: externalLinks.twitter.link,
  },
  {
    platformName: 'Linkedin',
    backgroundColor: '#0077b5',
    link: externalLinks.linkedin.link,
  },
];
