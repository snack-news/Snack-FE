import styled from 'styled-components';

import { downarrowFilterImg } from '~src/resources';
import { ImgButton } from '~src/view/components/ImgButton';

export const DownArrowButton = styled(ImgButton).attrs({ src: downarrowFilterImg, width: '13px' })`
  display: block;

  padding: 0px 20px;
  height: 100%;
`;
