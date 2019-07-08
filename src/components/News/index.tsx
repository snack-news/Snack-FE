import React, { FunctionComponent, ReactNode } from 'react';
import styled, { css } from 'styled-components';

import { ExternalLinkWithImage } from 'Components/index';
import { HorizontalDivider } from 'Templates/index';
import { ColListLayout, BothMarginWrapper, RowListLayout } from 'Layouts/index';
import { shareImg, copyImg } from 'Resources/index';
import { getDateFormat } from 'Utils';

import Tags from './Tags';

interface INewsProps extends INews, INewsOptionProps {}

export interface INewsOptionProps {
  expanded?: boolean;
  isRenderHighlightTag?: boolean;
  isRenderWeekNumberOfMonth?: boolean;
}

const NEWS_DEFAULT_PROPS = {
  expanded: false,
  isRenderHighlightTag: false,
  isRenderWeekNumberOfMonth: false,
};

export const News: FunctionComponent<INewsProps> = props => {
  const {
    createdDate,
    title,
    content,
    tags,
    link,
    expanded,
    isRenderHighlightTag,
    isRenderWeekNumberOfMonth,
  } = {
    ...NEWS_DEFAULT_PROPS,
    ...props,
  };

  let filteredTags = tags;
  if (isRenderHighlightTag === false) {
    filteredTags = tags.filter(({ highlight }) => highlight === false);
  }

  return (
    <NewsLayout>
      {{
        createWeekLabel: isRenderWeekNumberOfMonth && <CreatedWeekLabel date={createdDate} />,
        tags: <Tags tags={filteredTags} />,
        title: <Title>{title}</Title>,
        content: (
          <ColListLayout.Repeat>
            <Content expanded={expanded}>{content}</Content>
            {expanded ? null : <MoreButton />}
          </ColListLayout.Repeat>
        ),
        externalLink: link ? <ExternalLinkWithImage {...link} /> : null,
        footer: (
          <RowListLayout.Align type="justify">
            <IconLabel iconImg={shareImg} label="공유하기" />
            <IconLabel iconImg={copyImg} label="링크복사" />
          </RowListLayout.Align>
        ),
      }}
    </NewsLayout>
  );
};

interface INewsLayoutProps {
  children: {
    createWeekLabel: ReactNode;
    tags: ReactNode;
    title: ReactNode;
    content: ReactNode;
    externalLink: ReactNode;
    footer: ReactNode;
  };
}

const NewsLayout: FunctionComponent<INewsLayoutProps> = ({
  children: { createWeekLabel, tags, title, content, externalLink, footer },
}) => (
  <ColListLayout.Detail
    top="30px"
    bottom="22px"
    items={[
      {
        el: createWeekLabel && <BothMarginWrapper>{createWeekLabel}</BothMarginWrapper>,
        bottom: '15px',
      },
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
        el: externalLink,
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

const CreatedWeekLabel: FunctionComponent<{ date: number }> = ({ date }) => {
  return (
    <div style={{ fontFamily: 'SFProDisplay', fontSize: '15px', color: '#0b66f7' }}>
      {getDateFormat(new Date(date), 'YYYY년 MM월 WEEK_NUM주')}
    </div>
  );
};

const Title = styled.div`
  font-size: 19px;
  font-weight: 600;
  color: #121111;

  text-overflow: ellipsis;
  white-space: nowrap;
  word-wrap: normal;
  overflow: hidden;
`;

const Content = styled.div<{ expanded?: boolean }>`
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
