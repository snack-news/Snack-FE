import styled from 'styled-components';

import { downarrowFilterImg } from '~nclient/resources';
import { ImgButton } from '~nclient/view/components/ImgButton';

export const DownArrowButton = styled(ImgButton).attrs({ src: downarrowFilterImg })`
  display: block;
  width: 13px;

  padding: 0px 20px;
  height: 100%;
`;
