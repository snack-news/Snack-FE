import React from 'react';
import styled from 'styled-components';

import { FooterNavAnchor as FooterNavAnchorOrg } from '~nclient/view/atoms/Anchors/FooterNavAnchor';
import { brightBlue } from '~nclient/view/atoms/styles/colors';

export const FooterNavAnchor = () => (
  <WrapStyled>
    <FooterNavAnchorOrg href="#">서비스 안내</FooterNavAnchorOrg>
  </WrapStyled>
);

const WrapStyled = styled.div`
  display: inline-block;
  background-color: ${brightBlue};

  padding: 20px;
`;
