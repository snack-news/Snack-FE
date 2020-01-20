import React, { FC } from 'react';

import { NewsLabel } from './NewsLabel';

interface IProps {
  topics: ITopic[];
}

export const TopicLabelList: FC<IProps> = ({ topics }) => (
  <>
    {topics.map(topic => (
      <NewsLabel key={topic.id}>{topic.name}</NewsLabel>
    ))}
  </>
);
