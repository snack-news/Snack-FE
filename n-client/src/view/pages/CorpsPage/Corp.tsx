import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

import { ArrowLink } from '~nclient/view/atoms/styles/Icons';

interface Props {
  to: string;
  image?: string;
}

export const Corp: React.FC<Props> = ({ to, image, children }) => (
  <CorpLink to={to}>
    <CorpIconWrapper>
      <CorpIcon src={image} />
    </CorpIconWrapper>
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

const CorpIconWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 36px;
  height: 36px;
  background-color: rgb(254, 254, 254);
  border: 1px solid rgb(236, 236, 236);
  border-radius: 1000px;

  margin-right: 10px;
`;

const CorpIcon = styled.img`
  max-width: 24px;
  max-height: 24px;
`;

const Label = styled.span`
  flex: 1;

  font-size: 14px;
  font-weight: 500;
  color: rgb(18, 17, 17);
`;

const ArrowLinkIcon = styled(ArrowLink)`
  width: 8px;
`;
