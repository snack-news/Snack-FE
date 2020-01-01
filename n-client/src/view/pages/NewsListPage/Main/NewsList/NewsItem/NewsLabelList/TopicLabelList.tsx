import React, { FC } from 'react';

import { NewsLabel } from './NewsLabel';

interface Props {
  topics: Topic[];
}

export const TopicLabelList: FC<Props> = ({ topics }) => (
  <>
    {topics.map(topic => (
      <NewsLabel key={topic.id}>{topic.name}</NewsLabel>
    ))}
  </>
);
