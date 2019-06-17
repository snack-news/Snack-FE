import styled from 'styled-components';

interface HorizontalDividerProps {
  thick?: boolean;
}

const HorizontalDivider = styled.div<HorizontalDividerProps>`
  height: ${({ thick }) => (thick ? '8px' : '1px')};
  width: 100%;

  background-color: #e7e7e7;
`;

export default HorizontalDivider;
