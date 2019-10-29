import React, { FC } from 'react';

import styled from 'styled-components';

import { ComponentInfo } from '~storybook/components/types';

export const RowWrapListItem: FC<RowWrapListItemProps> = ({
  children: { main, name },
}) => (
  <Root>
    <Main>{main}</Main>
    <Name>{name}</Name>
  </Root>
);

interface RowWrapListItemProps {
  children: ComponentInfo;
}

const Root = styled.li`
  list-style-type: none;
  padding: 10px;
`;

const Main = styled.div``;

const Name = styled.div``;
