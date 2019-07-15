import React, { FunctionComponent } from 'react';
import styled from 'styled-components';

import { ColListLayout } from 'Layouts/index';

interface ITabProps {
  selected?: boolean;
}

const TabLabel = styled.div<Pick<ITabProps, 'selected'>>`
  display: flex;
  flex-grow: 1;
  align-items: center;
  justify-content: center;

  font-size: 16px;
  font-weight: 600;

  color: ${({ selected }) => (selected ? '#0b66f7' : '#595966')};
`;

const TabUnderLine = styled.div<{ selected?: boolean }>`
  display: flex;
  height: 1.5px;
  background-color: ${({ selected }) => (selected ? '#0b66f7' : '#e7e7e7')};
`;

const Tab: FunctionComponent<ITabProps> = ({ children, selected }) => (
  <ColListLayout.Detail
    top="18px"
    items={[
      {
        el: <TabLabel selected={selected}>{children}</TabLabel>,
        bottom: '18px',
      },
      {
        el: <TabUnderLine selected={selected} />,
      },
    ]}
  />
);

export default Tab;
