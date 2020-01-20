import React from 'react';
import { StaticRouter } from 'react-router';

import { createFunction, SSRComponent } from './types';

export const create: createFunction = () => {
  const Component: SSRComponent = ({ children, location }) => (
    <StaticRouter location={location}>{children}</StaticRouter>
  );

  return {
    Component,
  };
};
