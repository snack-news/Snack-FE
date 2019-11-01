import styled from 'styled-components';

import { white } from '~nclient/view/atoms/styles/colors';
import { littleMedium } from '~nclient/view/atoms/styles/fonts';

export const FooterNavAnchor = styled.a`
  ${littleMedium}

  text-decoration: none;
  background-color: rgba(0, 0, 0, 0);
  border-width: 0px;
  color: ${white};
`;
