import React from 'react';
import styled from 'styled-components';

import Tab from './Tab';

interface Tab {
  key: string;
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
      {tabs.map(({ label, key }) => (
        <Tab selected={key === tabs[0].key} key={key}>
          {label}
        </Tab>
      ))}
    </TabsWrapper>
  );
};

export default Tabs;
