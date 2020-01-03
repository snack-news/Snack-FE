import styled from 'styled-components';

import { MAX_WIDTH } from '~nclient/constants/sizes';

export const BottomDrawer = styled.section`
  position: fixed;
  background-color: white;
  flex-direction: column;
  bottom: 0px;

  border-top-right-radius: 5px;
  border-top-left-radius: 5px;

  max-width: ${MAX_WIDTH};
  width: 100%;
  padding-bottom: 20px;

  overflow: auto;
  max-height: 375px;
`;
