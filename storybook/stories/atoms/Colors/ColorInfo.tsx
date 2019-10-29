import React, { FC } from 'react';
import styled, { StyledComponent } from 'styled-components';

export const ColorInfo: FC<ColorInfoProps> = ({ name, color }) => (
  <ColorInfoRoot>
    <ColorInfoName>
      <ColorBox color={color} />
    </ColorInfoName>
    <ColorInfoName>{name}</ColorInfoName>
    <ColorInfoName>{color}</ColorInfoName>
  </ColorInfoRoot>
);

interface ColorInfoProps {
  name: string;
  color: string;
}

const ColorInfoRoot = styled.ul`
  list-style-type: none;
`;

const ColorInfoName = styled.li`
  list-style-type: none;
`;

const ColorBox: StyledComponent<'div', { color: string }> = styled.div`
  background: ${props => props.color};
  width: 100px;
  height: 100px;
`;
