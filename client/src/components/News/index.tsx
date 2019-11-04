import React, {
  FunctionComponent,
  ReactNode,
  useState,
  useEffect,
} from 'react';
import styled, { css } from 'styled-components';
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
  expanded?: boolean;
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
    expanded: defaultExpanded,
    isRenderHighlightTag,
    isRenderWeekNumberOfMonth,
    newsId,
  } = props;

  let filteredTags = tags;
  if (!isRenderHighlightTag) {
    filteredTags = tags.filter(({ highlight }) => highlight === false);
  }

  const [expanded, setExpanded] = useState(defaultExpanded);

  const [copied, setCopied] = useState(false);

  useEffect(() => {
    if (copied) {
      setTimeout(() => {
        setCopied(false);
      }, 3000);
    }
  }, [copied]);

  return (
    <NewsLayout>
      {{
        createWeekLabel: isRenderWeekNumberOfMonth && (
          <CreatedWeekLabel date={createdDate} />
        ),
        tags: <Tags tags={filteredTags} />,
        title: <Title>{title}</Title>,
        content: (
          <ColListLayout.Repeat>
            <Content
              expanded={expanded}
              onClick={() => setExpanded(false)}
              dangerouslySetInnerHTML={{ __html: render(content) }}
            >
              {}
            </Content>
            {expanded ? null : <MoreButton onClick={() => setExpanded(true)} />}
          </ColListLayout.Repeat>
        ),
        externalLink: link ? <ExternalLinkWithImage {...link} /> : null,
        footer: (
          <Center>
            {/* <IconLabel iconImg={shareImg} label="공유하기" /> */}
            <CopyToClipboard
              text={`https://snak.news/news/${newsId}`}
              onCopy={() => setCopied(true)}
            >
              {copied ? (
                <IconLabel iconImg={copyImg} label="복사완료!" />
              ) : (
                <IconLabel iconImg={copyImg} label="링크복사" />
              )}
            </CopyToClipboard>
          </Center>
        ),
      }}
    </NewsLayout>
  );
};

News.defaultProps = {
  expanded: false,
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
    bottom="15px"
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
        bottom: '15px',
      },
      {
        el: <BothMarginWrapper depth={3}>{footer}</BothMarginWrapper>,
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

const Content = styled.div<{ expanded?: boolean }>`
  display: block;
  font-size: 14px;
  line-height: 1.43;
  color: #121111;

  ${({ expanded }) =>
    !expanded &&
    css`
      overflow: hidden;
      height: 75px;
    `}
`;

const MoreButton = styled.button.attrs({ children: '👇 더보기' })`
  margin-top: 20px;
  font-size: 14px;
  line-height: 2.4;
  color: #b6b6c0;
  text-align: center;
  background-color: #f5f4f5;
  color: #4a4a4a;

  width: 100%;
  border-width: 0px;
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
