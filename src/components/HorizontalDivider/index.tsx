import styled from 'styled-components';

interface HorizontalDividerProps {
  thick?: boolean;
}

const HorizontalDivider = styled.div<HorizontalDividerProps>`
  width: 100%;
  height: 1px;
  background-color: #e7e7e7;

  height: ${({ thick }) => (thick ? '8px' : '1px')};
`;

export default HorizontalDivider;
