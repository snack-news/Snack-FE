import React, { SFC, ReactElement } from 'react';
import styled from 'styled-components';
import psl from 'psl';

import { HorizontalDivider } from 'Templates/index';
import { ColListLayout, BothMarginWrapper, RowListLayout } from 'Layouts/index';
import { shareImg, copyImg } from 'Resources/index';

import { Tags, TagsProps } from './Tags';

interface NewsCardProps {
  title: string;
  content: string;
  tags: TagsProps['tags'];
  link?: Link;
}

const NewsCard: SFC<NewsCardProps> = ({ title, content, tags, link }) => (
  <NewsCardLayout>
    {{
      tags: <Tags tags={tags} />,
      title: <Title>{title}</Title>,
      content: (
        <ColListLayout.Repeat>
          <Content>{content}</Content>
          <MoreButton />
        </ColListLayout.Repeat>
      ),
      externalLink: (
        <ColListLayout.Repeat>
          {link && link.img && <LinkImg src={link.img} />}
          {link && <ExternalLink {...link} />}
        </ColListLayout.Repeat>
      ),
      footer: (
        <RowListLayout.Between>
          <IconLabel iconImg={shareImg} label="공유하기" />
          <IconLabel iconImg={copyImg} label="링크복사" />
        </RowListLayout.Between>
      ),
    }}
  </NewsCardLayout>
);

interface NewsCardLayoutProps {
  children: {
    tags: ReactElement;
    title: ReactElement;
    content: ReactElement;
    externalLink: ReactElement;
    footer: ReactElement;
  };
}

const NewsCardLayout: SFC<NewsCardLayoutProps> = ({
  children: { tags, title, content, externalLink, footer },
}) => (
  <ColListLayout.Detail
    top="30px"
    items={[
      {
        el: <BothMarginWrapper>{tags}</BothMarginWrapper>,
        bottom: '10px',
      },
      {
        el: <BothMarginWrapper>{title}</BothMarginWrapper>,
        bottom: '10px',
      },
      {
        el: <BothMarginWrapper>{content}</BothMarginWrapper>,
        bottom: '25px',
      },
      {
        el: <BothMarginWrapper depth={0}>{externalLink}</BothMarginWrapper>,
        bottom: '10px',
      },
      {
        el: (
          <BothMarginWrapper>
            <HorizontalDivider />
          </BothMarginWrapper>
        ),
        bottom: '12px',
      },
      {
        el: <BothMarginWrapper depth={3}>{footer}</BothMarginWrapper>,
        bottom: '22px',
      },
    ]}
  />
);

const Title = styled.div`
  font-family: SFProDisplay;
  font-size: 19px;
  font-weight: 600;
  color: #121111;

  text-overflow: ellipsis;
  white-space: nowrap;
  word-wrap: normal;
  overflow: hidden;
`;

const Content = styled.div`
  font-family: AppleSDGothicNeo;
  font-size: 14px;
  line-height: 1.43;
  color: #121111;

  display: inline-block;
  display: -webkit-box;

  overflow: hidden;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
`;

const MoreButton = styled.div.attrs({ children: '더보기' })`
  font-family: SFProDisplay;
  font-size: 14px;
  line-height: 2.4;
  color: #b6b6c0;
`;

const LinkImg = styled.img`
  width: 100%;
`;

const ExternalLinkWrapper = styled.div`
  width: 100%;
  background-color: #fafafa;
  padding: 15px 20px;
`;

const LinkHrefWrapper = styled.div`
  font-family: SFProDisplay;
  font-size: 12px;
  color: #756e6e;
`;

const LinkTitleWrapper = styled.div`
  font-family: SFProDisplay;
  font-size: 14px;
  font-weight: 500;
  color: #121111;
`;

const extractHostname = (url: string) => {
  let hostname: string;
  // find & remove protocol (http, ftp, etc.) and get hostname

  if (url.indexOf('//') > -1) {
    [, , hostname] = url.split('/');
  } else {
    [hostname] = url.split('/');
  }

  // find & remove port number
  [hostname] = hostname.split(':');
  // find & remove "?"
  [hostname] = hostname.split('?');

  return hostname;
};

interface Link {
  href: string;
  title: string;
  img?: string;
}

const ExternalLink: SFC<Pick<Link, 'href' | 'title'>> = ({ href, title }) => {
  return (
    <ExternalLinkWrapper>
      <LinkHrefWrapper>{psl.get(extractHostname(href))}</LinkHrefWrapper>
      <div style={{ height: '5px' }} />
      <LinkTitleWrapper>{title}</LinkTitleWrapper>
    </ExternalLinkWrapper>
  );
};

interface IconLabelProps {
  iconImg: string;
  label: string;
}

const IconLabelImg = styled.img`
  width: 23px;
`;

const IconLabelText = styled.span`
  font-family: SFProText;
  font-size: 13px;
  color: #595966;
`;

const IconLabel: SFC<IconLabelProps> = ({ iconImg, label }) => (
  <div>
    <RowListLayout.Repeat interval="3px">
      <IconLabelImg src={iconImg} alt="icon" />
      <IconLabelText>{label}</IconLabelText>
    </RowListLayout.Repeat>
  </div>
);

export default NewsCard;
