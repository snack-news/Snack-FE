import React, { FC } from 'react';
import styled from 'styled-components';

import { Link } from '~src/view/components/Link';

interface IProps {
  color: string;
  background: string;
  to: string;
  name: string;
}

export const PlatformLink: FC<IProps> = ({ color, background, to, name }) => (
  <StyledAnchor color={color} background={background} to={to}>
    {name}
    <br />
    에서 보기
  </StyledAnchor>
);

interface IStyledAnchorProps {
  color: string;
  background: string;
}

const StyledAnchor = styled(Link)<IStyledAnchorProps>`
  display: flex;
  align-items: center;
  justify-content: center;
  min-width: 81px;
  min-height: 75px;

  font-size: 12px;
  font-weight: 500;

  color: ${props => props.color};
  background-color: ${props => props.background};
  border-radius: 5px;
  text-decoration: none;
`;
