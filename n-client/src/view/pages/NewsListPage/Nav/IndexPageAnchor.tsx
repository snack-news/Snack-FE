import React, { FC } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

import { contentImg } from '~nclient/resources';

interface Props {}

export const IndexPageAnchor: FC<Props> = () => (
  <StyledLink to="/">
    <ContentIcon />
  </StyledLink>
);

const StyledLink = styled(Link)``;

const ContentIcon = styled.img.attrs({ src: contentImg })`
  display: block;
  width: 26px;
  padding: 10px 20px;
`;
