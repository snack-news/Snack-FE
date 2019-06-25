import React, { FunctionComponent, ReactElement } from 'react';
import styled, { css } from 'styled-components';

import { ExternalLinkWithImage } from 'Components/index';
import { HorizontalDivider } from 'Templates/index';
import { ColListLayout, BothMarginWrapper, RowListLayout } from 'Layouts/index';
import { shareImg, copyImg } from 'Resources/index';

import Tags from './Tags';

interface INewsProps extends INews {
  expanded?: boolean;
}

export const News: FunctionComponent<INewsProps> = ({ title, content, tags, link, expanded }) => (
  <NewsLayout>
    {{
      tags: <Tags tags={tags} />,
      title: <Title>{title}</Title>,
      content: (
        <ColListLayout.Repeat>
          <Content expanded={expanded}>{content}</Content>
          {expanded ? null : <MoreButton />}
        </ColListLayout.Repeat>
      ),
      externalLink: link ? <ExternalLinkWithImage {...link} /> : null,
      footer: (
        <RowListLayout.Between>
          <IconLabel iconImg={shareImg} label="공유하기" />
          <IconLabel iconImg={copyImg} label="링크복사" />
        </RowListLayout.Between>
      ),
    }}
  </NewsLayout>
);

interface INewsLayoutProps {
  children: {
    tags: ReactElement;
    title: ReactElement;
    content: ReactElement;
    externalLink: ReactElement | null;
    footer: ReactElement;
  };
}

const NewsLayout: FunctionComponent<INewsLayoutProps> = ({
  children: { tags, title, content, externalLink, footer },
}) => (
  <ColListLayout.Detail
    top="30px"
    bottom="22px"
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

const Content = styled.div<{ expanded?: boolean }>`
  font-family: AppleSDGothicNeo;
  font-size: 14px;
  line-height: 1.43;
  color: #121111;

  display: inline-block;
  display: -webkit-box;

  ${({ expanded }) =>
    expanded
      ? ''
      : css`
          overflow: hidden;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
        `}
`;

const MoreButton = styled.div.attrs({ children: '더보기' })`
  font-family: SFProDisplay;
  font-size: 14px;
  line-height: 2.4;
  color: #b6b6c0;
`;

interface IIconLabelProps {
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

const IconLabel: FunctionComponent<IIconLabelProps> = ({ iconImg, label }) => (
  <div>
    <RowListLayout.Repeat interval="3px">
      <IconLabelImg src={iconImg} alt="icon" />
      <IconLabelText>{label}</IconLabelText>
    </RowListLayout.Repeat>
  </div>
);
