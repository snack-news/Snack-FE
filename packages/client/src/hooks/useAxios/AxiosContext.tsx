/* eslint-disable react/jsx-max-depth */

import React, { FC } from 'react';

import { ICache } from './ICache';
import { Cache } from './Cache';

type BaseUrlType = string | undefined;
type Promises = { [index: string]: Promise<void> };

export const BaseUrlContext = React.createContext<BaseUrlType>(undefined);
export const CacheContext = React.createContext<ICache>(new Cache());
export const PromisesContext = React.createContext<Promises>({});

interface IProps {
  baseURL: string;
  cache: ICache;
  promises: Promises;
}

export const AxiosProvider: FC<IProps> = ({ baseURL, cache, promises, children }) => (
  <BaseUrlContext.Provider value={baseURL}>
    <CacheContext.Provider value={cache}>
      <PromisesContext.Provider value={promises}>{children}</PromisesContext.Provider>
    </CacheContext.Provider>
  </BaseUrlContext.Provider>
);
