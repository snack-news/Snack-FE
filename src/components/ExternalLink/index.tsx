import React, { FunctionComponent } from 'react';
import styled from 'styled-components';

import { ColListLayout, BothMarginWrapper } from 'Layouts/index';
import { getHostName } from 'Utils';
import LinkImg from './LinkImg'

export const ExternalLinkWithImage: FunctionComponent<IExternalLink> = ({ href, title, img }) => {
  return (
    <ColListLayout.Repeat>
      {img && <LinkImg src={img} />}
      <ExternalLink href={href} title={title} />
    </ColListLayout.Repeat>
  );
};

export const ExternalLink: FunctionComponent<IExternalLink> = ({ href, title }) => {
  const hostname = getHostName(href);

  if (hostname === null) {
    return null;
  }

  return (
    <ExternalLinkWrapper interval="8px" top="18px" bottom="18px">
      <BothMarginWrapper>
        <LinkTitleWrapper>{title}</LinkTitleWrapper>
      </BothMarginWrapper>
      <BothMarginWrapper>
        <LinkHrefWrapper>{hostname.toUpperCase()}</LinkHrefWrapper>
      </BothMarginWrapper>
    </ExternalLinkWrapper>
  );
};

const LinkHrefWrapper = styled.div`
  font-size: 12px;
  color: #756e6e;
`;

const ExternalLinkWrapper = styled(ColListLayout.Repeat)`
  background-color: #fafafa;
`;

const LinkTitleWrapper = styled.div`
  font-size: 16px;
  font-weight: 500;
  color: #121111;
`;
