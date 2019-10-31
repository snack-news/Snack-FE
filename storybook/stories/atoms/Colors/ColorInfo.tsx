import React, { FC } from 'react';
import styled, { StyledComponent } from 'styled-components';

export const ColorInfo: FC<Props> = ({ name, color }) => (
  <Root>
    <Main>
      <ColorBox color={color} />
    </Main>
    <Name>{name}</Name>
    <Color>{color}</Color>
  </Root>
);

interface Props {
  name: string;
  color: string;
}

const Root = styled.ul`
  list-style-type: none;
`;

const Main = styled.li`
  list-style-type: none;
`;

const Name = styled.li`
  list-style-type: none;
`;

const Color = styled.li`
  list-style-type: none;
`;

const ColorBox: StyledComponent<'div', { color: string }> = styled.div`
  background: ${props => props.color};
  width: 100px;
  height: 100px;
`;
