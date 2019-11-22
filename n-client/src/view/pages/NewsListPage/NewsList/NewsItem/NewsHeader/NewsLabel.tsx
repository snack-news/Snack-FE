import styled from 'styled-components';

import {
  orangeyRed,
  coolGrey,
  whiteThree,
} from '~nclient/view/atoms/styles/colors';
import { little } from '~nclient/view/atoms/styles/fonts';

interface Props {
  highlight?: boolean;
}

export const NewsLabel = styled.li<Props>`
  display: inline-block;
  padding: 5px 7px;
  min-width: 29px;
  text-align: center;

  ${little}

  color: ${whiteThree};
  background-color: ${({ highlight }) => (highlight ? orangeyRed : coolGrey)};
`;
