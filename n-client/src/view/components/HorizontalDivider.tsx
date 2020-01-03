import styled from 'styled-components';

import { PALE_GREY } from '~nclient/constants/colors';

interface IHorizontalDividerProps {
  thick?: boolean;
}

export const HorizontalDivider = styled.div<IHorizontalDividerProps>`
  height: ${({ thick }) => (thick ? '8px' : '1px')};

  background-color: ${PALE_GREY};
`;
