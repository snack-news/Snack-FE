import React, { SFC } from 'react';
import styled from 'styled-components';

import { ColListLayout } from 'Layouts/index';
import { getHostName } from 'Utils';

export const ExternalLinkWithImage: SFC<IExternalLink> = ({ href, title, img }) => {
  return (
    <ColListLayout.Repeat>
      {img && <LinkImg src={img} />}
      <ExternalLink href={href} title={title} />
    </ColListLayout.Repeat>
  );
};

export const ExternalLink: SFC<IExternalLink> = ({ href, title }) => {
  return (
    <ExternalLinkWrapper>
      <LinkHrefWrapper>{getHostName(href)}</LinkHrefWrapper>
      <div style={{ height: '5px' }} />
      <LinkTitleWrapper>{title}</LinkTitleWrapper>
    </ExternalLinkWrapper>
  );
};

const LinkImg = styled.img`
  width: 100%;
`;

const LinkHrefWrapper = styled.div`
  font-family: SFProDisplay;
  font-size: 12px;
  color: #756e6e;
`;

const ExternalLinkWrapper = styled.div`
  width: 100%;
  background-color: #fafafa;
  padding: 15px 20px;
`;

const LinkTitleWrapper = styled.div`
  font-family: SFProDisplay;
  font-size: 14px;
  font-weight: 500;
  color: #121111;
`;
