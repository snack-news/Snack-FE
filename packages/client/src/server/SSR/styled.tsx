import React from 'react';
import { ServerStyleSheet, StyleSheetManager } from 'styled-components';

import { SSRComponent, getHeadFunction, createFunction } from './types';

export const create: createFunction = () => {
  const sheet = new ServerStyleSheet();

  const getHead: getHeadFunction = () => {
    return sheet.getStyleTags();
  };

  const Component: SSRComponent = ({ children }) => (
    <StyleSheetManager sheet={sheet.instance}>{children}</StyleSheetManager>
  );

  return {
    getHead,
    Component,
  };
};
