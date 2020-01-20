/* eslint-disable react/jsx-max-depth */

import React, { FC } from 'react';

import './common';
import { Meta } from './Meta';
import { Root } from './Root';

import { Routes } from '~src/view/Routes';

export const App: FC = () => {
  return (
    <Root>
      <Meta />
      <Routes />
    </Root>
  );
};
