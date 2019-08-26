import React, { FunctionComponent } from 'react';
import { Link } from 'react-router-dom';

interface IRouterLinkProps {
  to: string;
  className?: string;
  isExternal: boolean;
}
const RouterLink: FunctionComponent<IRouterLinkProps> = ({
  to,
  children,
  className,
  isExternal,
}) => {
  if (isExternal) {
    return (
      <a className={className} href={to}>
        {children}
      </a>
    );
  }
  return (
    <Link className={className} to={to}>
      {children}
    </Link>
  );
};

export default RouterLink;
