import { facebookImg, twitterImg, kakaoImg, emailImg } from 'Resources/index';

export const footerSocialList = [
  {
    link: 'https://www.facebook.com/',
    img: facebookImg,
    key: 'facebook',
  },
  {
    link: 'https://www.facebook.com/',
    img: twitterImg,
    key: 'twitter',
  },
  {
    link: 'https://www.facebook.com/',
    img: kakaoImg,
    key: 'kakao',
  },
  {
    link: 'https://www.facebook.com/',
    img: emailImg,
    key: 'email',
  },
];

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
  { children: '서비스 안내', href: 'https://www.facebook.com/', key: '1' },
  { children: '제안하기', href: 'https://www.facebook.com/', key: '2' },
  { children: '문의하기', href: 'https://www.facebook.com/', key: '3' },
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
    key: 'Facebook',
    platformName: 'Facebook',
    backgroundColor: '#33599d',
    link: externalLinks.facebook.link,
  },
  {
    key: 'KakaoTalk',
    platformName: 'KakaoTalk',
    backgroundColor: '#fae100',
    color: '#121111',
    link: externalLinks.kakao.link,
  },
  {
    key: 'Twitter',
    platformName: 'Twitter',
    backgroundColor: '#38a1f3',
    link: externalLinks.twitter.link,
  },
  {
    key: 'Linkedin',
    platformName: 'Linkedin',
    backgroundColor: '#0077b5',
    link: externalLinks.linkedin.link,
  },
];

export const theme = {
  maxWidth: 600,
  depthWidth: 20,
};
