import React, { FC } from 'react';

import './common';
import { Meta } from './Meta';
import { Root } from './Root';

import { Routes } from '~src/view/Routes';

export const App: FC = () => (
  <Root>
    <Meta />
    <Routes />
  </Root>
);
