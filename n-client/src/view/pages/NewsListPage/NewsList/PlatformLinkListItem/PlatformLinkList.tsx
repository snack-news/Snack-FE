import React, { FC } from 'react';
import styled from 'styled-components';

import { PlatformLink } from './PlatformLink';

interface Props {}

// TODO 링크 상수 파일로 정리

export const PlatformLinkList: FC<Props> = () => (
  <Wrapper>
    <PlatformLink
      color="rgb(254, 254, 254)"
      background="rgb(51, 89, 157)"
      name="Facebook"
      href="https://www.facebook.com/groups/snacknews/"
    />
    <PlatformLink
      color="rgb(18, 17, 17)"
      background="rgb(250, 225, 0)"
      name="KakaoTalk"
      href="https://open.kakao.com/o/gKIXUx0"
    />
    <PlatformLink
      color="rgb(254, 254, 254)"
      background="rgb(56, 161, 243)"
      name="Twitter"
      href="https://twitter.com/techsnacknews"
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
