import React from 'react';
import ReactDOMServer from 'react-dom/server';

import { SSRInstance } from './SSR/types';

import { AxiosProvider, Cache } from '~src/hooks/useAxios';

import { App } from '~src/view/App';
import { create } from '~src/server/SSR';

export const getRenderData = async (location: string) => {
  const ssr = create();

  const body = await getBody(ssr, location);

  const head = getHead(ssr);

  return { body, head };
};

const getBody = async (ssr: SSRInstance, location: string) => {
  const Compoent = ssr.Component ? ssr.Component : React.Fragment;
  const SSRAppElement = React.createElement(Compoent, { location }, React.createElement(App));

  const cache = new Cache();
  const promises = {};

  const AxiosProviderProps = {
    baseURL: 'https://snak.news/',
    cache,
    promises,
  };

  ReactDOMServer.renderToString(
    React.createElement(AxiosProvider, AxiosProviderProps, SSRAppElement)
  );

  await Promise.all(Object.values(promises));

  const body = ReactDOMServer.renderToString(
    React.createElement(AxiosProvider, AxiosProviderProps, SSRAppElement)
  );

  return body;
};

const getHead = (ssr: SSRInstance) => (ssr.getHead ? ssr.getHead() : '');
