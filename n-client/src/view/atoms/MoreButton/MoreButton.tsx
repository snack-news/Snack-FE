import styled from 'styled-components';

import { paleGreyTwo, greyishBrown } from '~nclient/view/atoms/colors';
import { littleMedium } from '~nclient/view/atoms/fonts';
import { padding } from '~nclient/view/atoms/sizes';

export const MoreButton = styled.button.attrs({ children: '👇 더보기' })`
  ${littleMedium}

  margin-top: ${padding.medium};
  
  line-height: 2.4;
  text-align: center;

  background-color: ${paleGreyTwo};
  color: ${greyishBrown};

  width: 319px;
  height: 35px;
  border-width: 0px;
`;
