import styled from 'styled-components';

import { orangeyRed, coolGrey, whiteThree } from '~nclient/constants/colors';

interface Props {
  highlight?: boolean;
}

export const NewsLabel = styled.li<Props>`
  display: inline-block;
  padding: 5px 7px;
  min-width: 29px;
  text-align: center;

  font-size: 11px;
  height: 11px;
  line-height: 11px;
  font-weight: 500;

  font-family: 'Noto Sans KR', sans-serif;

  color: ${whiteThree};
  background-color: ${({ highlight }) => (highlight ? orangeyRed : coolGrey)};
`;
