import React from 'react';
import styled from 'styled-components';

import { PlatformLink } from './PlatformLink';

interface Props {}

export const PlatformLinkList: React.FC<Props> = () => {
  return (
    <Wrapper>
      <PlatformLink
        color="rgb(254, 254, 254)"
        background="rgb(51, 89, 157)"
        name="facebook"
        href="/"
      />
      <PlatformLink
        color="rgb(254, 254, 254)"
        background="rgb(51, 89, 157)"
        name="facebook"
        href="/"
      />
      <PlatformLink
        color="rgb(254, 254, 254)"
        background="rgb(51, 89, 157)"
        name="facebook"
        href="/"
      />
      <PlatformLink
        color="rgb(254, 254, 254)"
        background="rgb(51, 89, 157)"
        name="facebook"
        href="/"
      />
      <PlatformLink
        color="rgb(254, 254, 254)"
        background="rgb(51, 89, 157)"
        name="facebook"
        href="/"
      />
      <PlatformLink
        color="rgb(254, 254, 254)"
        background="rgb(51, 89, 157)"
        name="facebook"
        href="/"
      />
      <PlatformLink
        color="rgb(254, 254, 254)"
        background="rgb(51, 89, 157)"
        name="facebook"
        href="/"
      />
    </Wrapper>
  );
};

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
