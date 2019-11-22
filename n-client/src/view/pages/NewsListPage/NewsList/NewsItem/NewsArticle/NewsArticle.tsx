import React from 'react';
import styled from 'styled-components';

import { decodeContent } from './decodeContent';

import { black } from '~nclient/view/atoms/styles/colors';

interface Props {
  title: string;
  content: string;
}

export const NewsArticle: React.FC<Props> = ({ title, content }) => {
  return (
    <>
      <Title>{title}</Title>
      <Content dangerouslySetInnerHTML={{ __html: decodeContent(content) }} />
    </>
  );
};

const Title = styled.h1`
  font-family: 'Noto Sans KR', sans-serif;
  font-size: 19px;
  font-weight: 600;
  line-height: 1.21;
  color: ${black};
`;

const Content = styled.section``;
