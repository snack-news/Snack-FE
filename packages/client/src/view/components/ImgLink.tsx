import React, { FC } from 'react';

import { Link } from 'react-router-dom';

export interface IProps {
  to: string;
  src: string;
  alt: string;
  className?: string;
}

export const ImgLink: FC<IProps> = ({ to, src, alt, className }) => (
  <Link to={to}>
    <img src={src} alt={alt} className={className} />
  </Link>
);
