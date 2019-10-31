import styled from 'styled-components';

import { paleGreyTwo, greyishBrown } from '~nclient/view/atoms/styles/colors';
import { littleMedium } from '~nclient/view/atoms/styles/fonts';

export const MoreButton = styled.button.attrs({ children: '👇 더보기' })`
  ${littleMedium}

  line-height: 2.4;
  text-align: center;

  background-color: ${paleGreyTwo};
  color: ${greyishBrown};

  width: 319px;
  height: 35px;
  border-width: 0px;
`;
