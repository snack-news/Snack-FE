import React, { FC } from 'react';

import { Link } from 'react-router-dom';
import styled from 'styled-components';

export interface IProps {
  to: string;
  src: string;
  alt: string;
  className?: string;
  width?: string;
  height?: string;
}

export const ImgLink: FC<IProps> = ({ to, src, alt, className, width, height }) => (
  <StyledLink to={to} className={className}>
    <img src={src} alt={alt} style={{ width, height }} />
  </StyledLink>
);

const StyledLink = styled(Link)`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: row;
`;
