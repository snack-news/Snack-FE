import styled from 'styled-components';

import { exitImg } from '~src/resources';
import { ImgButton } from '~src/view/components/ImgButton';

export const CloseButton = styled(ImgButton).attrs({ src: exitImg, width: '14px', height: '14px' })`
  margin: 20px 20px 15px 20px;
`;
