/* eslint-disable max-lines */

import React, { FC } from 'react';
import styled from 'styled-components';

import { PlatformLink } from './PlatformLink';

import { facebookURL, kakaoURL, twitterURL } from '~nclient/constants/urls';

interface Props {}

export const PlatformLinkList: FC<Props> = () => (
  <Wrapper>
    <PlatformLink
      color="rgb(254, 254, 254)"
      background="rgb(51, 89, 157)"
      name="Facebook"
      href={facebookURL}
    />
    <PlatformLink
      color="rgb(18, 17, 17)"
      background="rgb(250, 225, 0)"
      name="KakaoTalk"
      href={kakaoURL}
    />
    <PlatformLink
      color="rgb(254, 254, 254)"
      background="rgb(56, 161, 243)"
      name="Twitter"
      href={twitterURL}
    />
  </Wrapper>
);

const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;

  padding-right: 20px;
  padding-left: 20px;
  overflow: auto;

  > * {
    margin-right: 10px;
  }
`;
