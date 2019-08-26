import React, { FunctionComponent } from 'react';

import { RowListLayout } from 'Layouts/index';

import { routes } from 'Config/routes';

import TabLink from './TabLink';

const tabs = [
  {
    label: 'News',
    to: routes.homePage.getLink(),
  },
  {
    label: 'Picks',
    to: routes.picksPage.getLink(),
  },
];

interface ITabsProps {}

export const Tabs: FunctionComponent<ITabsProps> = () => {
  return (
    <RowListLayout.Align type="justify">
      {tabs.map(({ label, to }) => (
        <TabLink to={to} key={`${label}_${to}`}>
          {label}
        </TabLink>
      ))}
    </RowListLayout.Align>
  );
};
