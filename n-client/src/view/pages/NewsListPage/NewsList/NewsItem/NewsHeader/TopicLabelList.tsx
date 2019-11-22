import React from 'react';

import { NewsLabel } from './NewsLabel';

interface Props {
  topics: Topic[];
}

export const TopicLabelList: React.FC<Props> = ({ topics }) => {
  return (
    <>
      {topics.map(topic => (
        <NewsLabel key={topic.id}>{topic.name}</NewsLabel>
      ))}
    </>
  );
};
