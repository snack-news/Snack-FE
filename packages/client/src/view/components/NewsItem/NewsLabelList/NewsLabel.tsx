import styled from 'styled-components';

import { COOL_GREY, WHITE_THREE } from '~src/constants/colors';

export const NewsLabel = styled.li`
  display: inline-block;
  padding: 5px 7px;
  min-width: 29px;
  text-align: center;

  font-size: 11px;
  height: 11px;
  line-height: 11px;
  font-weight: 500;

  color: ${WHITE_THREE};
  background-color: ${COOL_GREY};
`;
