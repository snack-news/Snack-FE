/* eslint-disable max-lines */
// TODO 코드 개선 필요 (너무 긴 라인수) (code bad smell)

import React, { FC } from 'react';
import styled from 'styled-components';

import { PlatformLink } from './PlatformLink';

import { FACEBOOK_URL, KAKAO_URL, TWITTER_URL } from '~src/constants/urls';
import { WHITE_THREE, BLACK, FACEBOOK, KAKAO, TWITTER } from '~src/constants/colors';

interface IProps {}

export const PlatformLinkList: FC<IProps> = () => (
  <Wrapper>
    <PlatformLink color={WHITE_THREE} background={FACEBOOK} name="Facebook" to={FACEBOOK_URL} />
    <PlatformLink color={BLACK} background={KAKAO} name="KakaoTalk" to={KAKAO_URL} />
    <PlatformLink color={WHITE_THREE} background={TWITTER} name="Twitter" to={TWITTER_URL} />
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
