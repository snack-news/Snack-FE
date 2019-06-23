import React, { SFC } from 'react';
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

  font-family: SFProDisplay;
  font-size: 16px;
  font-weight: 600;

  color: ${({ selected }) => (selected ? '#0b66f7' : '#595966')};
`;

const TabUnderLine = styled.div`
  display: flex;
  height: 1.5px;
  background-color: #0b66f7;
`;

const Tab: SFC<ITabProps> = ({ children, selected }) => (
  <ColListLayout.Detail
    top="10px"
    items={[
      {
        el: <TabLabel selected={selected}>{children}</TabLabel>,
        bottom: '10px',
      },
      {
        el: selected ? <TabUnderLine /> : null,
      },
    ]}
  />
);

export default Tab;
