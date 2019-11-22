import React from 'react';

import { NewsLabel } from './NewsLabel';

interface Props {
  tags: Tag[];
}

export const TagLabelList: React.FC<Props> = ({ tags }) => {
  return (
    <>
      {tags.map(tag => (
        <NewsLabel highlight key={tag.id}>
          {tag.title}
        </NewsLabel>
      ))}
    </>
  );
};
