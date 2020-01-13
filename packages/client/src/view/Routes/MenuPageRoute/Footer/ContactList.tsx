import React, { FC } from 'react';
import styled from 'styled-components';

import { Contact } from './Contact';

import { facebookWhiteImg, twitterWhiteImg, kakaoWhiteImg, emailWhiteImg } from '~src/resources';
import { FACEBOOK_URL, TWITTER_URL, KAKAO_URL, EMAIL_URL } from '~src/constants/urls';

interface IProps {}

export const ContactList: FC<IProps> = () => (
  <Wrapper>
    <Contact to={FACEBOOK_URL} icon={facebookWhiteImg} />
    <Contact to={TWITTER_URL} icon={twitterWhiteImg} />
    <Contact to={KAKAO_URL} icon={kakaoWhiteImg} />
    <Contact to={EMAIL_URL} icon={emailWhiteImg} />
  </Wrapper>
);

const Wrapper = styled.section`
  display: flex;
  padding-top: 30px;
  padding-bottom: 30px;

  padding-right: 40px;
  padding-left: 40px;

  > * {
    margin-right: 25px;
  }
`;
