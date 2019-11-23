import React from 'react';
import styled from 'styled-components';

import { TagLabelList } from './TagLabelList';
import { TopicLabelList } from './TopicLabelList';

interface Props {
  tags: Tag[];
  topics: Topic[];
  className?: string;
}

export const NewsLabelList: React.FC<Props> = ({ tags, topics, className }) => {
  return (
    <Wrapper className={className}>
      <TagLabelList tags={tags} />
      <TopicLabelList topics={topics} />
    </Wrapper>
  );
};

const Wrapper = styled.ul`
  margin: 0 20px 10px 20px;
  padding: 0;

  > * {
    margin-right: 8px;
  }
`;
