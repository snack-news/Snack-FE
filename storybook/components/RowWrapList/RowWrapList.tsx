import React, { FC } from 'react';
import styled from 'styled-components';

import { RowWrapListItem } from './Item';

import { ComponentInfo } from '~storybook/components/types';

export const RowWrapList: FC<RowWrapListProps> = ({ children }) => (
  <RowWrapListStyled>
    {children.map(child => (
      <RowWrapListItem>{child}</RowWrapListItem>
    ))}
  </RowWrapListStyled>
);

interface RowWrapListProps {
  children: ComponentInfo[];
}

const RowWrapListStyled = styled.ul`
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  list-style-type: none;
`;
