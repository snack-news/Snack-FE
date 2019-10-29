import React from 'react';

import { ColorInfo } from './ColorInfo';

import { RowWrapList } from '~storybook/components/RowWrapList';
import * as colors from '~nclient/view/atoms/colors';

export const Colors = () => (
  <RowWrapList>
    {Object.entries(colors).map(([name, color]) => ({
      main: <ColorInfo name={name} color={color} />,
      name,
    }))}
  </RowWrapList>
);
