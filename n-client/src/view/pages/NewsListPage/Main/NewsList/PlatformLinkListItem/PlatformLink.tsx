import React, { FC } from 'react';
import styled from 'styled-components';

interface Props {
  color: string;
  background: string;
  href: string;
  name: string;
}

export const PlatformLink: FC<Props> = ({ color, background, href, name }) => (
  <StyledAnchor color={color} background={background} href={href}>
    {name}
    <br />
    에서 보기
  </StyledAnchor>
);

interface StyledAnchorProps {
  color: string;
  background: string;
}

const StyledAnchor = styled.a<StyledAnchorProps>`
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
