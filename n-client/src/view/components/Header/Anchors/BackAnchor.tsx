import React, { FC } from 'react';
import styled from 'styled-components';

import { backBlueArrowImg } from '~nclient/resources';
import { useGoBack } from '~nclient/hooks/useGoBack';
import { ImgButton } from '~nclient/view/components/ImgButton';

export const BackAnchor: FC = () => {
  const goBack = useGoBack();
  return <BackBlueArrowButton onClick={goBack} />;
};

const BackBlueArrowButton = styled(ImgButton).attrs({ src: backBlueArrowImg })`
  display: block;
  height: 22px;

  padding: 0px 20px;
  height: 100%;
`;
