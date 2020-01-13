import React from 'react';

import { SSRComponent, getHeadFunction, createFunction } from './types';

import { create as helmetCreate } from './helmet';
import { create as routerCreate } from './router';
import { create as styledCreate } from './styled';

import { Component as EmptyComponent } from './empty';

const creates: createFunction[] = [helmetCreate, routerCreate, styledCreate];

export const create: createFunction = () => {
  const instances = creates.map(createFunc => createFunc());

  const getHead: getHeadFunction = () =>
    instances.map(({ getHead: getHeadFunc }) => getHeadFunc()).join('');

  const Component: SSRComponent = ({ children, location }) =>
    instances.reduce(
      (preElement, instance) => React.createElement(instance.Component, { location }, preElement),
      React.createElement(EmptyComponent, { location }, children)
    );

  return {
    getHead,
    Component,
  };
};
