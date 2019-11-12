import React from 'react';

import styled from 'styled-components';

import { Content } from '~nclient/view/atoms/styles/Icons/index';

interface Props {}

export const IndexPageAnchor: React.FC<Props> = () => {
  return <ContentAnchor />;
};

const ContentStyled = styled(Content)`
  display: block;
  width: 26px;
  padding: 10px 20px;
`;

const ContentAnchor = styled.a.attrs({
  children: <ContentStyled />,
  href: '/',
})``;
