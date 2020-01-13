import React from 'react';

import { SSRComponent, getHeadFunction } from './types';

export const getHead: getHeadFunction = () => {
  return '';
};

export const Component: SSRComponent = ({ children }) => <>{children}</>;
