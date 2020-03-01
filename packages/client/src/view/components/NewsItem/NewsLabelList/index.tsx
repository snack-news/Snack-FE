import React, { FC } from 'react';
import styled from 'styled-components';

import { TagLabelList } from './TagLabelList';
import { TopicLabelList } from './TopicLabelList';
import { DateLabel } from './DateLabel';

interface IProps {
  tags: ITag[];
  topics: ITopic[];
  className?: string;
}

export const NewsLabelList: FC<IProps> = ({ tags, topics, className }) => (
  <Wrapper className={className}>
    <DateLabel />
    <TagLabelList tags={tags} />
    <TopicLabelList topics={topics} />
  </Wrapper>
);

const Wrapper = styled.ul`
  margin: 0 20px 10px 20px;
  padding: 0;

  > * {
    margin-right: 8px;
  }
`;
