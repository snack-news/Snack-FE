import * as React from 'react';
import ReactDOM from 'react-dom';
import { HelloProps, Hello } from './src/Hello';

export const render = (props: HelloProps, rootElement: Element | null) => {
  ReactDOM.render(<Hello {...props} />, rootElement);
};

export default {
  render,
};
