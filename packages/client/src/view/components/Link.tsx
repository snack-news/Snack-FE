import React, { FC } from 'react';

import { Link as CSRLink } from 'react-router-dom';

interface IProps {
  to: string;
  className?: string;
}

export const Link: FC<IProps> = ({ to, className, children }) => {
  const hasUrlScheme = /^\w+:/.test(to);

  if (hasUrlScheme) {
    return (
      <a href={to} className={className}>
        {children}
      </a>
    );
  }

  return (
    <CSRLink to={to} className={className}>
      {children}
    </CSRLink>
  );
};
