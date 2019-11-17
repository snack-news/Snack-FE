import React, { FunctionComponent, ReactNode, useState } from 'react';
import styled from 'styled-components';
import { CopyToClipboard } from 'react-copy-to-clipboard';

import Tags from './Tags';

import { render } from './utils';

import { copyImg } from '~client/resources';

import { ExternalLinkWithImage } from '~client/components/index';
// import { HorizontalDivider } from '~client/templates/index';
import {
  ColListLayout,
  BothMarginWrapper,
  RowListLayout,
} from '~client/layouts/index';
// import { shareImg, copyImg } from '~client/resources/index';
import { getDateFormat } from '~client/utils';
import { HorizontalDivider } from '~client/templates';
import { Center } from '~client/layouts/Center';

export interface INewsProps extends INews, INewsOptionProps {}

export interface INewsOptionProps {
  isRenderHighlightTag?: boolean;
  isRenderWeekNumberOfMonth?: boolean;
}

export const News: FunctionComponent<INewsProps> & {
  defaultProps: Partial<INewsProps>;
} = props => {
  const {
    createdDate,
    title,
    content,
    tags,
    link,
    isRenderHighlightTag,
    isRenderWeekNumberOfMonth,
    newsId,
  } = props;

  let linkObj;
  if (link) {
    if (typeof link === 'string') {
      linkObj = { href: link };
    } else {
      linkObj = link;
    }
  }

  let filteredTags = tags;
  if (!isRenderHighlightTag) {
    filteredTags = tags.filter(({ highlight }) => highlight === false);
  }

  const [copied, setCopied] = useState(false);

  return (
    <NewsLayout>
      {{
        createWeekLabel: isRenderWeekNumberOfMonth && (
          <CreatedWeekLabel date={createdDate} />
        ),
        tags: <Tags tags={filteredTags} />,
        title: <Title>{title}</Title>,
        content: (
          <Content dangerouslySetInnerHTML={{ __html: render(content) }} />
        ),
        externalLink: linkObj ? <ExternalLinkWithImage {...linkObj} /> : null,
        footer: (
          <CopyToClipboard
            text={`https://snak.news/news/${newsId}`}
            onCopy={() => setCopied(true)}
          >
            <Center style={{ padding: '15px' }}>
              {copied ? (
                <IconLabel iconImg={copyImg} label="복사완료!" />
              ) : (
                <IconLabel iconImg={copyImg} label="링크복사" />
              )}
            </Center>
          </CopyToClipboard>
        ),
      }}
    </NewsLayout>
  );
};

News.defaultProps = {
  isRenderHighlightTag: false,
  isRenderWeekNumberOfMonth: false,
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
    items={[
      {
        el: createWeekLabel && (
          <BothMarginWrapper>{createWeekLabel}</BothMarginWrapper>
        ),
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
        bottom: '20px',
      },
      {
        el: (
          <BothMarginWrapper>
            <HorizontalDivider />
          </BothMarginWrapper>
        ),
      },
      {
        el: footer,
      },
    ]}
  />
);

const CreatedWeekLabel: FunctionComponent<{ date: number }> = ({ date }) => {
  return (
    <div style={{ fontSize: '15px', color: '#0b66f7' }}>
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

const Content = styled.div`
  display: block;
  font-size: 14px;
  line-height: 1.43;
  color: #121111;
`;

interface IIconLabelProps {
  iconImg: string;
  label: string;
  onClick?: React.DOMAttributes<HTMLDivElement>['onClick'];
}

const IconLabelImg = styled.img`
  width: 16px;
  margin: 2px 4px;
`;

const IconLabelText = styled.span`
  display: flex;
  font-size: 13px;
  color: #595966;
`;

const IconLabel: FunctionComponent<IIconLabelProps> = ({
  iconImg,
  label,
  onClick,
}) => (
  <div onClick={onClick}>
    <RowListLayout.Repeat interval="3px">
      <IconLabelImg src={iconImg} alt="icon" />
      <IconLabelText>{label}</IconLabelText>
    </RowListLayout.Repeat>
  </div>
);
