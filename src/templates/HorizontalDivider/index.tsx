import styled from 'styled-components';

interface IHorizontalDividerProps {
  thick?: boolean;
  color?: string;
}

export const HorizontalDivider = styled.div<IHorizontalDividerProps>`
  height: ${({ thick }) => (thick ? '8px' : '1px')};
  width: 100%;

  background-color: ${({ color }) => color};
`;

HorizontalDivider.defaultProps = {
  color: '#f2f2f5',
};
