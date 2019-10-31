import styled from 'styled-components';

import {
  orangeyRed,
  coolGrey,
  whiteThree,
} from '~nclient/view/atoms/styles/colors';
import { little } from '~nclient/view/atoms/styles/fonts';

interface TagLabelProps {
  highlight?: boolean;
}

export const TagLabel = styled.div<TagLabelProps>`
  display: inline-block;
  padding: 5px 8px;
  min-width: 42px;
  text-align: center;

  ${little}

  color: ${whiteThree};
  background-color: ${({ highlight }) => (highlight ? orangeyRed : coolGrey)};
`;
