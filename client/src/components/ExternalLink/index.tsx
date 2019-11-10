import React, { FC } from 'react';
import styled from 'styled-components';

import LinkImg from './LinkImg';

import { useLinkMetaData, MetaData } from './useLinkMetaData';

import { ColListLayout, BothMarginWrapper } from '~client/layouts/index';
import { getHostName } from '~client/utils';

interface IExternalLinkWithImageProps extends IExternalLink {}

export const ExternalLinkWithImage: FC<IExternalLinkWithImageProps> = ({
  href,
}) => {
  const hostName = getHostName(href);
  const meta = useLinkMetaData(href);

  const gotoLink = () => {
    // eslint-disable-next-line no-undef
    window.location.href = href;
  };

  if (hostName === null) {
    return null;
  }

  return (
    <ColListLayout.Repeat onClick={gotoLink}>
      <LinkImg href={href} label={hostName} meta={meta} />
      <ExternalLink href={href} meta={meta} />
    </ColListLayout.Repeat>
  );
};

interface ExternalLinkProps {
  href: string;
  meta: MetaData | null;
}

export const ExternalLink: FC<ExternalLinkProps> = ({ href, meta }) => {
  const hostname = getHostName(href);

  if (hostname === null) {
    return null;
  }

  if (meta) {
    return (
      <ExternalLinkWrapper interval="8px" top="18px" bottom="18px">
        <BothMarginWrapper>
          <LinkTitleWrapper>{meta.title}</LinkTitleWrapper>
        </BothMarginWrapper>
        <BothMarginWrapper>
          <LinkHrefWrapper>{hostname.toUpperCase()}</LinkHrefWrapper>
        </BothMarginWrapper>
      </ExternalLinkWrapper>
    );
  }

  return (
    <ExternalLinkWrapper interval="8px" top="18px" bottom="18px">
      <BothMarginWrapper>
        <LinkTitleWrapper />
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
