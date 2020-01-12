import React, { FC, ReactNode } from 'react';
import styled from 'styled-components';

import { NonStyledButton } from '~src/view/components/NonStyledButton';

export interface IProps {
  onClick?: () => void;
  src?: string;
  alt?: string;
  className?: string;
  frontLabel?: ReactNode;
  backLabel?: ReactNode;
  width?: string;
  height?: string;
}

export const ImgButton: FC<IProps> = ({
  onClick,
  src,
  className,
  alt,
  frontLabel,
  backLabel,
  width,
  height,
}) => (
  <StyledButton onClick={onClick} className={className}>
    {frontLabel}
    <StyledImg src={src} alt={alt} style={{ width, height }} />
    {backLabel}
  </StyledButton>
);

const StyledButton = styled(NonStyledButton)`
  display: flex;
  align-items: center;
  flex-direction: row;
`;

const StyledImg = styled.img`
  padding: 0px 10px;
`;
