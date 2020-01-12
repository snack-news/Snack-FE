import React, { FC } from 'react';
import styled from 'styled-components';

import { logoImg } from '~src/resources';
import { ImgLink } from '~src/view/components/ImgLink';
import { HOME_PATH } from '~src/constants/paths';

export const LogoAnchor: FC = () => <LogoLink to={HOME_PATH} alt="Logo" />;

const LogoLink = styled(ImgLink).attrs({ src: logoImg })`
  display: block;
  height: 20px;

  padding: 0px 20px;
`;
