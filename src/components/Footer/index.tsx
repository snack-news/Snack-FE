import React from 'react';
import styled from 'styled-components';

import LogoWhiteFooterImg from '../../resources/icon/logo_white_footer.png';

import facebookImg from '../../resources/icon/facebookSocial_bluebg.png';
import twitterImg from '../../resources/icon/twitterSocial_bluebg.png';
import kakaoImg from '../../resources/icon/kakaoSocial_bluebg.png';
import emailImg from '../../resources/icon/emailSocial_bluebg.png';

const socialList = [
  {
    key: '1',
    src: facebookImg,
  },
  {
    key: '2',
    src: twitterImg,
  },
  {
    key: '3',
    src: kakaoImg,
  },
  {
    key: '4',
    src: emailImg,
  },
];

const footerLinks = [
  { children: '서비스 안내', key: '1' },
  { children: '제안하기', key: '2' },
  { children: '문의하기', key: '3' },
];

const Wrapper = styled.div`
  box-shadow: 0 -1px 3px 0 rgba(11, 102, 247, 0.4);
  background-color: #0b66f7;
  padding: 40px 0 32px 0;
`;

const Copyright = styled.img.attrs({ src: LogoWhiteFooterImg })`
  display: block;
  margin: 0 auto;
`;

const SocialListWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
`;

const SocialIcon = styled.img``;

const FooterLinkListWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
`;

const FooterLink = styled.div`
  width: 65px;
  font-family: SFProDisplay;
  font-size: 13px;
  font-weight: 500;
  text-align: center;
  color: #fefefe;
`;

const Footer = () => (
  <Wrapper>
    <FooterLinkListWrapper>
      {footerLinks.map(footerLinkProps => (
        <FooterLink {...footerLinkProps} />
      ))}
    </FooterLinkListWrapper>
    <div style={{ height: '29px' }} />
    <SocialListWrapper>
      {socialList.map(socialIconProps => (
        <SocialIcon {...socialIconProps} />
      ))}
    </SocialListWrapper>
    <div style={{ height: '42px' }} />
    <Copyright />
  </Wrapper>
);

export default Footer;
