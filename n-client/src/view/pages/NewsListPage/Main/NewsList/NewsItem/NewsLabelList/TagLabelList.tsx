import React, { FC } from 'react';

import { NewsLabel } from './NewsLabel';

interface Props {
  tags: Tag[];
}

export const TagLabelList: FC<Props> = ({ tags }) => (
  <>
    {tags.map(tag => (
      <NewsLabel highlight key={tag.id}>
        {tag.title}
      </NewsLabel>
    ))}
  </>
);
