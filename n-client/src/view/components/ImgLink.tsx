import React, { FC } from 'react';

import { Link } from 'react-router-dom';

export interface IProps {
  to: string;
  src: string;
  alt: string;
}

export const ImgLink: FC<IProps> = ({ to, src, alt }) => (
  <Link to={to}>
    <img src={src} alt={alt} />
  </Link>
);
