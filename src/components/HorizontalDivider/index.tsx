import styled from 'styled-components';

interface HorizontalDividerProps {
  thick?: boolean;
  small?: boolean;
}

const HorizontalDivider = styled.div<HorizontalDividerProps>`
  height: 1px;
  background-color: #e7e7e7;

  height: ${({ thick }) => (thick ? '8px' : '1px')};
  margin: ${({ small }) => (small ? '0 20px' : '0')};
`;

export default HorizontalDivider;
