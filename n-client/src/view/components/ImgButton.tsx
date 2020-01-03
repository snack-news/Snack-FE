import React, { FC, ReactNode } from 'react';
import styled from 'styled-components';

import { NonStyledButton } from '~nclient/view/components/NonStyledButton';

export interface IProps {
  onClick?: () => void;
  src?: string;
  alt?: string;
  style?: React.CSSProperties;
  className?: string;
  frontLabel?: ReactNode;
  backLabel?: ReactNode;
}

export const ImgButton: FC<IProps> = ({
  onClick,
  src,
  style,
  className,
  alt,
  frontLabel,
  backLabel,
}) => (
  <StyledButton onClick={onClick}>
    {frontLabel}
    <img style={style} className={className} src={src} alt={alt} />
    {backLabel}
  </StyledButton>
);

const StyledButton = styled(NonStyledButton)`
  display: flex;
  align-items: center;
  flex-direction: row;
`;
