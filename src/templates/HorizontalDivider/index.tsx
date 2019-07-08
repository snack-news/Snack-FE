import styled from 'styled-components';

interface IHorizontalDividerProps {
  thick?: boolean;
}

export const HorizontalDivider = styled.div<IHorizontalDividerProps>`
  height: ${({ thick }) => (thick ? '8px' : '1px')};
  width: 100%;

  background-color: #f2f2f5;
`;
