import React, { FC } from 'react';
import styled from 'styled-components';

import { ImgLink } from '~src/view/components/ImgLink';

import { facebookBlueImg, twitterBlueImg, kakaoBlueImg, emailBlueImg } from '~src/resources';
import { FACEBOOK_URL, TWITTER_URL, KAKAO_URL, EMAIL_URL } from '~src/constants/urls';

interface IProps {
  className?: string;
}

export const ContactList: FC<IProps> = ({ className }) => (
  <Wrapper className={className}>
    <ImgLink to={FACEBOOK_URL} src={facebookBlueImg} alt="facebook" width="40px" height="40px" />
    <ImgLink to={TWITTER_URL} src={twitterBlueImg} alt="twitter" width="40px" height="40px" />
    <ImgLink to={KAKAO_URL} src={kakaoBlueImg} alt="kakao" width="40px" height="40px" />
    <ImgLink to={EMAIL_URL} src={emailBlueImg} alt="email" width="40px" height="40px" />
  </Wrapper>
);

// TODO 스타일 구조화 (정리) 하기 (우선순위 낮춰서)

const Wrapper = styled.section`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;
