import styled, { css } from 'styled-components';

interface HorizontalDividerProps {
  thick?: boolean;
}

const HorizontalDivider = styled.div<HorizontalDividerProps>`
  width: 100%;
  height: 1px;
  ${props =>
    props.thick &&
    css`
      height: 8px;
    `}
  background-color: #e7e7e7;
`;

export default HorizontalDivider;
