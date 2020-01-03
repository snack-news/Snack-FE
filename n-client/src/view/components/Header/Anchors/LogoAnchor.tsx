import React, { FC } from 'react';
import styled from 'styled-components';

import { logoImg } from '~nclient/resources';
import { ImgLink } from '~nclient/view/components/ImgLink';
import { HOME_PATH } from '~nclient/constants/paths';

export const LogoAnchor: FC = () => <LogoLink to={HOME_PATH} alt="Logo" />;

const LogoLink = styled(ImgLink).attrs({ src: logoImg })`
  display: block;
  height: 20px;

  padding: 0px 20px;
  height: 100%;
`;
