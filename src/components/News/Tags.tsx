import React, { SFC } from 'react';
import styled from 'styled-components';

import { RowListLayout } from 'Layouts/index';

interface ITagsProps {
  tags: ITag[];
}

const Tags: SFC<ITagsProps> = ({ tags }) => (
  <RowListLayout.Repeat interval="8px">
    {tags.map(tagProps => (
      <Tag {...tagProps} />
    ))}
  </RowListLayout.Repeat>
);

const Tag = styled.div<ITag>`
  font-family: SFProDisplay;
  font-size: 11px;
  font-weight: 500;
  color: #fefefe;
  padding: 3px 8px;

  background-color: ${({ highlight }) => (highlight ? '#dd2020' : '#6d6f72')};
`;

export default Tags;
