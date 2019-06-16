import React from 'react';
import styled from 'styled-components';

import Tab from './Tab';

interface Tab {
  id: string;
  label: string;
}

interface TabsProps {
  tabs: Tab[];
}

const TabsWrapper = styled.div`
  display: flex;
  background-color: #fffefe;
  height: 40px;
`;

export const Tabs: React.SFC<TabsProps> = ({ tabs }) => {
  return (
    <TabsWrapper>
      {tabs.map(({ label, id }) => (
        <Tab selected={id === tabs[0].id} key={id}>
          {label}
        </Tab>
      ))}
    </TabsWrapper>
  );
};

export default Tabs;
