import React, { FC } from 'react';
import styled from 'styled-components';
import { useHistory } from 'react-router';

import { LogoAnchor } from './LogoAnchor';

import { backBlueArrowImg } from '~src/resources';
import { useGoBack } from '~src/hooks/useGoBack';
import { ImgButton } from '~src/view/components/ImgButton';

export const BackAnchor: FC = () => {
  const history = useHistory();
  const goBack = useGoBack();

  const canGo = !!history.location.key;

  return canGo ? <BackBlueArrowButton onClick={goBack} /> : <LogoAnchor />;
};

const BackBlueArrowButton = styled(ImgButton).attrs({ src: backBlueArrowImg, width: '25px' })`
  height: 100%;
  width: 65px;
`;
