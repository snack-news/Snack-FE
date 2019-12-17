import React from 'react';
import { SWRConfig } from 'swr';

import '~nclient/common';

import { Meta } from './Meta';
import { Routes } from './Routes';

export const App = () => (
  <SWRConfig
    value={{
      fetcher: (input: RequestInfo, init?: RequestInit | undefined) =>
        fetch(input, init).then(res => res.json()),
    }}
  >
    <Meta />
    <Routes />
  </SWRConfig>
);
