import React, { FunctionComponent } from 'react';

import { RowListLayout } from 'Layouts/index';
import { tabs } from 'Constants';

import Tab from './Tab';

interface ITabsProps {}

export const Tabs: FunctionComponent<ITabsProps> = () => {
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
