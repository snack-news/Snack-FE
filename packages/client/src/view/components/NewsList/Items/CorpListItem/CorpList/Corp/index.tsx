/* eslint-disable max-lines */
// TODO 코드 개선 필요 (너무 긴 라인수) (code bad smell)

import React, { FC } from 'react';
import styled from 'styled-components';

import { CorpLogo } from './CorpLogo';

import { Link } from '~src/view/components/Link';
import { SLATE_GREY } from '~src/constants/colors';
import { CORPS_NEWS_PATH } from '~src/constants/paths';

interface IProps {
  name: string;
  image: string;
  className?: string;
  id: number;
}

export const Corp: FC<IProps> = ({ name, image, className, id }) => (
  <Wrapper className={className} to={`${CORPS_NEWS_PATH}/${id}`}>
    <CorpLogo src={image} />
    <Label>{name}</Label>
  </Wrapper>
);

const Wrapper = styled(Link)`
  display: flex;
  flex-direction: column;
  text-decoration: none;

  padding-top: 12px;
  padding-bottom: 8px;

  min-width: 89px;
  min-height: 74px;

  border-radius: 5px;
  border-width: 0.5px;
  border-style: solid;
  /* TODO 색 상수화 및 조절 */
  border-color: rgb(214, 214, 219);
  border-image: initial;

  box-sizing: border-box;
`;

const Label = styled.span`
  display: flex;
  align-items: center;
  justify-content: center;

  font-size: 12px;
  color: ${SLATE_GREY};
`;
