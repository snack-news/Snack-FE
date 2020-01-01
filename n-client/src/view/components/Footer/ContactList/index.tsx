import React, { FC } from 'react';
import styled from 'styled-components';

import { Contact } from './Contact';

import { facebookBlueImg, twitterBlueImg, kakaoBlueImg, emailBlueImg } from '~nclient/resources';
import { facebookURL, twitterURL, kakaoURL, emailURL } from '~nclient/constants/urls';

interface Props {}

export const ContactList: FC<Props> = () => (
  <Wrapper>
    <Contact to={facebookURL} icon={facebookBlueImg} />
    <Contact to={twitterURL} icon={twitterBlueImg} />
    <Contact to={kakaoURL} icon={kakaoBlueImg} />
    <Contact to={emailURL} icon={emailBlueImg} />
  </Wrapper>
);

const Wrapper = styled.section`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;

  margin-bottom: 42px;

  padding-right: 40px;
  padding-left: 40px;
`;
