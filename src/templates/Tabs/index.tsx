import React from 'react';

import { RowListLayout } from 'Layouts/index';
import { tabs } from 'Constants';

import Tab from './Tab';

interface TabsProps {}

export const Tabs: React.SFC<TabsProps> = () => {
  return (
    <RowListLayout.Between>
      {tabs.map(({ label, key }) => (
        <Tab selected={key === tabs[0].key} key={key}>
          {label}
        </Tab>
      ))}
    </RowListLayout.Between>
  );
};

export default Tabs;
