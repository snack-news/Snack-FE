import React, { FC } from 'react';
import styled from 'styled-components';

import { backBlueArrowImg } from '~src/resources';
import { useGoBack } from '~src/hooks/useGoBack';
import { ImgButton } from '~src/view/components/ImgButton';

export const BackAnchor: FC = () => {
  const goBack = useGoBack();
  return <BackBlueArrowButton onClick={goBack} />;
};

const BackBlueArrowButton = styled(ImgButton).attrs({ src: backBlueArrowImg, height: '22px' })`
  display: block;

  padding: 0px 20px;
  height: 100%;
`;
