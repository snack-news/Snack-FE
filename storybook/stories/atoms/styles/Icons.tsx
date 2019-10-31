import React from 'react';

import { RowWrapList } from '~storybook/components/RowWrapList';
import * as icons from '~nclient/view/atoms/styles/Icons';

export const Icons = () => (
  <RowWrapList>
    {Object.entries(icons).map(([name, Icon]) => ({
      main: <Icon />,
      name,
    }))}
  </RowWrapList>
);

export default { title: 'Atoms' };
