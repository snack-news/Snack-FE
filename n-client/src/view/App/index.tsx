import React, { FC } from 'react';

import './common';

import { Meta } from './Meta';
import { Routes } from './Routes';
import { Root } from './Root';

export const App: FC = () => (
  <Root>
    <Meta />
    <Routes />
  </Root>
);
