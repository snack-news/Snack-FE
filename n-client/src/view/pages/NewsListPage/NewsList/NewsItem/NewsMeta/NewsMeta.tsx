import React, { FC } from 'react';
import styled from 'styled-components';

import { getHostName } from './getHostName';

import {
  black,
  brownishGrey,
  whiteFour,
} from '~nclient/view/atoms/styles/colors';

interface Props {
  link: string;
}

export const NewsMeta: FC<Props> = ({ link }) => {
  const hostName = getHostName(link);

  return (
    <>
      <LinkImageWrapper>
        <LinkImage src="https://www.collateart.com/opengraph.png" />
      </LinkImageWrapper>
      <LinkDesc>
        <LinkTitle>title</LinkTitle>
        <LinkHostName>{hostName}</LinkHostName>
      </LinkDesc>
    </>
  );
};

const LinkImageWrapper = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const LinkImage = styled.img`
  max-width: 360px;
  max-height: 180px;
`;

const LinkDesc = styled.section`
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
