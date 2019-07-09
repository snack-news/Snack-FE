import React, { FunctionComponent } from 'react';

import { RowListLayout } from 'Layouts/index';

import Tab from './Tab';

interface ITab {
  label: string;
  key: string;
}

interface ITabsProps {
  tabs: ITab[];
  selectTabKey: string;
}

export const Tabs: FunctionComponent<ITabsProps> = ({ tabs, selectTabKey }) => {
  return (
    <RowListLayout.Align type="justify">
      {tabs.map(({ label, key }) => (
        <Tab selected={key === selectTabKey} key={key}>
          {label}
        </Tab>
      ))}
    </RowListLayout.Align>
  );
};
