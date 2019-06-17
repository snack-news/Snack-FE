export const tabs = [
  {
    key: '1',
    label: 'News',
  },
  {
    key: '2',
    label: 'Picks',
  },
];

export const footerLinks = [
  { children: '서비스 안내', key: '1' },
  { children: '제안하기', key: '2' },
  { children: '문의하기', key: '3' },
];

export const externalLinks = {
  facebook: {
    link: '',
  },
  twitter: {
    link: '',
  },
  kakao: {
    link: '',
  },
  linkedin: {
    link: '',
  },
  email: {
    link: '',
  },
};

export const platformList = [
  {
    platformName: 'Facebook',
    backgroundColor: '#33599d',
    link: externalLinks.facebook,
  },
  {
    platformName: 'KakaoTalk',
    backgroundColor: '#fae100',
    color: '#121111',
    link: externalLinks.kakao,
  },
  {
    platformName: 'Twitter',
    backgroundColor: '#38a1f3',
    link: externalLinks.twitter,
  },
  {
    platformName: 'Linkedin',
    backgroundColor: '#0077b5',
    link: externalLinks.linkedin,
  },
];
