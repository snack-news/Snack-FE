import React from 'react';
import styled from 'styled-components';

interface Props {
  color: string;
  background: string;
  name: string;
}

export const PlatformLink = styled.a.attrs<Props>(props => ({
  children: (
    <>
      {props.name}
      <br />
      에서 보기
    </>
  ),
}))<Props>`
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
