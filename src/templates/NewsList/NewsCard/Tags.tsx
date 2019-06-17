import React, { SFC } from 'react';
import styled from 'styled-components';

import { RowListLayout } from 'Layouts/index';

export interface TagsProps {
  tags: TagProps[];
}

export const Tags: SFC<TagsProps> = ({ tags }) => (
  <RowListLayout.Repeat interval="8px">
    {tags.map(tagProps => (
      <Tag {...tagProps} />
    ))}
  </RowListLayout.Repeat>
);

interface TagProps {
  highlight?: boolean;
  children: string;
}

const Tag = styled.div<TagProps>`
  font-family: SFProDisplay;
  font-size: 11px;
  font-weight: 500;
  color: #fefefe;
  padding: 3px 8px;

  background-color: ${({ highlight }) => (highlight ? '#dd2020' : '#6d6f72')};
`;
