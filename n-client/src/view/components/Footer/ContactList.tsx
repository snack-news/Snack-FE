import React, { FC } from 'react';
import styled from 'styled-components';

import { ImgLink } from '~nclient/view/components/ImgLink';

import { facebookBlueImg, twitterBlueImg, kakaoBlueImg, emailBlueImg } from '~nclient/resources';
import { FACEBOOK_URL, TWITTER_URL, KAKAO_URL, EMAIL_URL } from '~nclient/constants/urls';

interface IProps {}

export const ContactList: FC<IProps> = () => (
  <Wrapper>
    <ImgLink to={FACEBOOK_URL} src={facebookBlueImg} alt="facebook" />
    <ImgLink to={TWITTER_URL} src={twitterBlueImg} alt="twitter" />
    <ImgLink to={KAKAO_URL} src={kakaoBlueImg} alt="kakao" />
    <ImgLink to={EMAIL_URL} src={emailBlueImg} alt="email" />
  </Wrapper>
);

// TODO 스타일 구조화 (정리) 하기 (우선순위 낮춰서)

const Wrapper = styled.section`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;
