import styled from 'styled-components';

interface IHorizontalDividerProps {
  thick?: boolean;
}

const HorizontalDivider = styled.div<IHorizontalDividerProps>`
  height: ${({ thick }) => (thick ? '8px' : '1px')};
  width: 100%;

  background-color: #e7e7e7;
`;

export default HorizontalDivider;
