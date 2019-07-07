/**
 * Page 컴포넌트의 기본 부모 컴포넌트
 *
 * footer를 고정할수 있는 layout
 */
import React, { ReactNode, FunctionComponent } from 'react';
import styled from 'styled-components';

const MAX_WIDTH = 600;

const Wrapper = styled.div`
  display: flex;
  min-height: 100vh;
  flex-direction: column;

  max-width: ${MAX_WIDTH}px;
  margin: 0 auto;
`;

const Header = styled.div``;
const Body = styled.div`
  flex: 1;
`;
const Footer = styled.div``;

interface IPageLayoutProps {
  children: {
    header?: ReactNode;
    body?: ReactNode;
    footer?: ReactNode;
  };
}

export const PageLayout: FunctionComponent<IPageLayoutProps> = ({
  children: { header, body, footer },
}) => (
  <Wrapper>
    <Header>{header}</Header>
    <Body>{body}</Body>
    <Footer>{footer}</Footer>
  </Wrapper>
);
