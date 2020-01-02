/* eslint-disable max-lines */

import React, { FC } from 'react';
import styled from 'styled-components';

import { CorpLogo } from './CorpLogo';

import { slateGrey } from '~nclient/constants/colors';

interface Props {
  name: string;
  image: string;
}

export const Corp: FC<Props> = ({ name, image }) => (
  <Wrapper>
    <CorpLogo src={image} />
    <Label>{name}</Label>
  </Wrapper>
);

const Wrapper = styled.a`
  padding-top: 12px;
  padding-bottom: 8px;

  display: flex;
  flex-direction: column;
  text-decoration: none;

  min-width: 89px;
  min-height: 74px;
  border-radius: 5px;
  border-width: 0.5px;
  border-style: solid;
  border-color: rgb(214, 214, 219);
  border-image: initial;
  box-sizing: border-box;
`;

const Label = styled.span`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 12px;
  color: ${slateGrey};
`;
