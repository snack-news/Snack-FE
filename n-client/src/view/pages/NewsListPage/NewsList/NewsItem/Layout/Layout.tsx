import React, { FC, ReactNode } from 'react';
import styled from 'styled-components';

import { Header } from './Header';
import { Article } from './Article';
import { Meta } from './Meta';
import { Footer } from './Footer';

import { HorizontalDivider } from '~nclient/view/atoms/Figures/HorizontalDivider';

interface LayoutProps {
  children: {
    header: ReactNode;
    article: ReactNode;
    meta: ReactNode;
    footer: ReactNode;
  };
}

export const Layout: FC<LayoutProps> = ({
  children: { header, article, meta, footer },
}) => (
  <Wrapper>
    <Header>{header}</Header>
    <Article>{article}</Article>
    <Meta>{meta}</Meta>
    <HorizontalDivider style={{ margin: '0 20px 0 20px' }} />
    <Footer>{footer}</Footer>
  </Wrapper>
);

const Wrapper = styled.section`
  margin: 20px 0 6px 0;
`;
