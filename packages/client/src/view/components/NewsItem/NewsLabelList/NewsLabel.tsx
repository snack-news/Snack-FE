import styled from 'styled-components';

import { ORANGEY_RED, COOL_GREY, WHITE_THREE } from '~src/constants/colors';

interface IProps {
  highlight?: boolean;
}

export const NewsLabel = styled.li<IProps>`
  display: inline-block;
  padding: 5px 7px;
  min-width: 29px;
  text-align: center;

  font-size: 11px;
  height: 11px;
  line-height: 11px;
  font-weight: 500;

  color: ${WHITE_THREE};
  background-color: ${({ highlight }) => (highlight ? ORANGEY_RED : COOL_GREY)};
`;
