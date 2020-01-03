import React, { FC } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

import { contentImg } from '~nclient/resources';
import { HOME_PATH } from '~nclient/constants/paths';

interface IProps {}

export const IndexPageAnchor: FC<IProps> = () => (
  <StyledLink to={HOME_PATH}>
    <ContentIcon />
  </StyledLink>
);

const StyledLink = styled(Link)``;

const ContentIcon = styled.img.attrs({ src: contentImg })`
  display: block;
  width: 26px;
  padding: 10px 20px;
`;
