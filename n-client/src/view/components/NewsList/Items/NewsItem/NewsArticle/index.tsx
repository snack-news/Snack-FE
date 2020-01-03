import React, { FC } from 'react';
import styled from 'styled-components';

import { decodeContent } from './decodeContent';

import { BLACK } from '~nclient/constants/colors';

interface IProps {
  title: string;
  content: string;
}

export const NewsArticle: FC<IProps> = ({ title, content }) => (
  <Wrapper>
    <Title>{title}</Title>
    <Content dangerouslySetInnerHTML={{ __html: decodeContent(content) }} />
  </Wrapper>
);

const Wrapper = styled.article`
  margin: 20px 20px 35px 20px;
`;

const Title = styled.h1`
  font-size: 19px;
  font-weight: 600;
  line-height: 1.21;
  color: ${BLACK};
`;

const Content = styled.section``;
