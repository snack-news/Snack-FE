import React, { FC } from 'react';
import styled from 'styled-components';

import { Contact } from './Contact';

import { facebookBlueImg, twitterBlueImg, kakaoBlueImg, emailBlueImg } from '~nclient/resources';
import { FACEBOOK_URL, KAKAO_URL, TWITTER_URL, EMAIL_URL } from '~nclient/constants/urls';

interface IProps {}

export const ContactLinks: FC<IProps> = () => (
  <Wrapper>
    <Contact to={FACEBOOK_URL} icon={facebookBlueImg} />
    <Contact to={TWITTER_URL} icon={twitterBlueImg} />
    <Contact to={KAKAO_URL} icon={kakaoBlueImg} />
    <Contact to={EMAIL_URL} icon={emailBlueImg} />
  </Wrapper>
);

const Wrapper = styled.div`
  margin: 0px 20px 0px 20px;

  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;
