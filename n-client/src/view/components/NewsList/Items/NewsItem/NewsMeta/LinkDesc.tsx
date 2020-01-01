/* eslint-disable max-lines */

import React, { FC } from 'react';
import styled from 'styled-components';

import { getHostName } from './getHostName';

import { black, brownishGrey, whiteFour } from '~nclient/constants/colors';

interface Props {
  title?: string;
  link: string;
}

export const LinkDesc: FC<Props> = ({ title, link }) => {
  const hostName = getHostName(link);

  return (
    <Wrapper>
      {title && <LinkTitle>{title}</LinkTitle>}
      <LinkHostName>{hostName}</LinkHostName>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  padding: 18px 20px 18px 20px;
  background: ${whiteFour};

  > *:not(:last-child) {
    margin-bottom: 8px;
  }
`;

const LinkTitle = styled.h2`
  font-size: 16px;
  font-weight: 500;
  font-family: 'Noto Sans KR', sans-serif;
  color: ${black};
  margin: 0;
`;

const LinkHostName = styled.section`
  font-size: 12px;
  font-family: 'Noto Sans KR', sans-serif;
  color: ${brownishGrey};
`;
