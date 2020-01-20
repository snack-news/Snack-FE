import React from 'react';

import { SSRComponent, getHeadFunction, createFunction } from './types';

import { create as helmetCreate } from './helmet';
import { create as routerCreate } from './router';
import { create as styledCreate } from './styled';

const creates: createFunction[] = [helmetCreate, routerCreate, styledCreate];

export const create: createFunction = () => {
  const instances = creates.map(createFunc => createFunc());

  const getHead: getHeadFunction = () =>
    instances.map(({ getHead: getHeadFunc }) => (getHeadFunc ? getHeadFunc() : '')).join('');

  const Component: SSRComponent = ({ children, location }) =>
    instances.reduce(
      (preElement, instance) =>
        instance.Component
          ? React.createElement(instance.Component, { location }, preElement)
          : preElement,
      React.createElement(React.Fragment, {}, children)
    );

  return {
    getHead,
    Component,
  };
};
