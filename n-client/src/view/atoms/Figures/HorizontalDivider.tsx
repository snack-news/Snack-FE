import styled from 'styled-components';

import { paleGrey } from '../styles/colors';

interface IHorizontalDividerProps {
  thick?: boolean;
}

export const HorizontalDivider = styled.div<IHorizontalDividerProps>`
  height: ${({ thick }) => (thick ? '8px' : '1px')};

  background-color: ${paleGrey};
`;
