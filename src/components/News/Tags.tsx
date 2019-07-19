import React, { FunctionComponent } from 'react';
import styled from 'styled-components';

import { RowListLayout } from 'Layouts/index';

interface ITagsProps {
  tags: ITag[];
}

const Tags: FunctionComponent<ITagsProps> = ({ tags }) => (
  <RowListLayout.Repeat interval="8px">
    {tags.map(tagProps => (
      <Tag {...tagProps} />
    ))}
  </RowListLayout.Repeat>
);

const Tag = styled.div<ITag>`
  font-size: 11px;
  font-weight: 500;
  color: #fefefe;
  padding: 5px 8px;
  background-color: ${({ highlight }) => (highlight ? '#dd2020' : '#6d6f72')};
`;

export default Tags;
