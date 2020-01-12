import React, { FC } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

import { CorpIcon } from './CorpIcon';

import { arrowLinkImg } from '~src/resources';
import { BLACK } from '~src/constants/colors';

interface IProps {
  to: string;
  image?: string;
}

export const Corp: FC<IProps> = ({ to, image, children }) => (
  <CorpLink to={to}>
    <CorpIcon src={image} />
    <Label>{children}</Label>
    <ArrowLinkIcon />
  </CorpLink>
);

const CorpLink = styled(Link)`
  display: flex;
  flex-direction: row;
  align-items: center;
  text-decoration: none;

  margin: 12px 20px 12px 20px;
`;

const Label = styled.span`
  flex: 1;

  font-size: 14px;
  font-weight: 500;
  color: ${BLACK};
`;

const ArrowLinkIcon = styled.img.attrs({ src: arrowLinkImg })`
  width: 8px;
`;
