import { Helmet } from 'react-helmet';

import { createFunction } from './types';

export const create: createFunction = () => {
  const getHead = () => {
    const helmet = Helmet.renderStatic();

    // TODO
    // helmet.htmlAttributes.toString()
    // helmet.bodyAttributes.toString()

    return [helmet.title.toString(), helmet.meta.toString(), helmet.link.toString()].join('');
  };

  return {
    getHead,
  };
};
