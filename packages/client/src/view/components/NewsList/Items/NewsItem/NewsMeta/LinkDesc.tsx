/* eslint-disable max-lines */
// TODO 코드 개선 필요 (너무 긴 라인수) (code bad smell)

import React, { FC } from 'react';
import styled from 'styled-components';

import { getHostName } from './getHostName';

import { BLACK, BROWNISH_GREY, WHITE_FOUR } from '~src/constants/colors';

interface IProps {
  title?: string;
  link: string;
}

export const LinkDesc: FC<IProps> = ({ title, link }) => {
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
  background: ${WHITE_FOUR};

  > *:not(:last-child) {
    margin-bottom: 8px;
  }
`;

const LinkTitle = styled.h2`
  font-size: 16px;
  font-weight: 500;
  color: ${BLACK};
  margin: 0;
`;

const LinkHostName = styled.section`
  font-size: 12px;
  color: ${BROWNISH_GREY};
`;
