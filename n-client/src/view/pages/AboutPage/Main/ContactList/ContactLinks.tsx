import React, { FC } from 'react';
import styled from 'styled-components';

import { Contact } from './Contact';

import { facebookBlueImg, twitterBlueImg, kakaoBlueImg, emailBlueImg } from '~nclient/resources';
import { facebookURL, kakaoURL, twitterURL, emailURL } from '~nclient/constants/urls';

interface Props {}

export const ContactLinks: FC<Props> = () => (
  <Wrapper>
    <Contact to={facebookURL} icon={facebookBlueImg} />
    <Contact to={twitterURL} icon={twitterBlueImg} />
    <Contact to={kakaoURL} icon={kakaoBlueImg} />
    <Contact to={emailURL} icon={emailBlueImg} />
  </Wrapper>
);

const Wrapper = styled.div`
  margin: 0px 20px 0px 20px;

  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;
