import { FC } from 'react';

export type createFunction = () => SSRInstance;

export type SSRInstance = {
  getHead: getHeadFunction;
  Component: SSRComponent;
};

export type getHeadFunction = () => string;

export type SSRComponent = FC<{ location: string }>;
