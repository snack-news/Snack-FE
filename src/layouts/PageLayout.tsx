/**
 * Page 컴포넌트의 기본 부모 컴포넌트
 *
 * footer를 고정할수 있는 layout
 */
import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  display: flex;
  min-height: 100vh;
  flex-direction: column;
`;

const Header = styled.div``;
const Body = styled.div`
  flex: 1;
`;
const Footer = styled.div``;

interface IPageLayoutProps {
  children: {
    header?: React.ReactNode;
    body?: React.ReactNode;
    footer?: React.ReactNode;
  };
}

export const PageLayout: React.FunctionComponent<IPageLayoutProps> = ({
  children: { header, body, footer },
}) => (
  <Wrapper>
    <Header>{header}</Header>
    <Body>{body}</Body>
    <Footer>{footer}</Footer>
  </Wrapper>
);
