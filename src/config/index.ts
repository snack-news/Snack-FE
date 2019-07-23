import {
  facebookBlueImg,
  facebookWhiteImg,
  twitterBlueImg,
  twitterWhiteImg,
  kakaoBlueImg,
  kakaoWhiteImg,
  emailBlueImg,
  emailWhiteImg,
} from 'Resources/index';

/**
 * TODO
 * - 메뉴페이지의 메뉴와 Footer의 일부 링크가 겹치는 사항 상수로 처리 필요
 * - externalLinks와 footerSocialList, platformList 중복사항 처리 필요
 */

export const footerSocialList = [
  {
    link: 'https://www.facebook.com/',
    img: {
      blue: facebookBlueImg,
      white: facebookWhiteImg,
    },
    key: 'facebook',
  },
  {
    link: 'https://www.facebook.com/',
    img: {
      blue: twitterBlueImg,
      white: twitterWhiteImg,
    },
    key: 'twitter',
  },
  {
    link: 'https://www.facebook.com/',
    img: {
      blue: kakaoBlueImg,
      white: kakaoWhiteImg,
    },
    key: 'kakao',
  },
  {
    link: 'https://www.facebook.com/',
    img: {
      blue: emailBlueImg,
      white: emailWhiteImg,
    },
    key: 'email',
  },
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
