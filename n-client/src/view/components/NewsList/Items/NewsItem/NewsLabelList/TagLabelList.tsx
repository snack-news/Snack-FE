import React, { FC } from 'react';

import { NewsLabel } from './NewsLabel';

interface IProps {
  tags: ITag[];
}

export const TagLabelList: FC<IProps> = ({ tags }) => (
  <>
    {tags.map(tag => (
      <NewsLabel highlight key={tag.id}>
        {tag.title}
      </NewsLabel>
    ))}
  </>
);
