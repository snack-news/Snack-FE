import React, { ReactNode, SFC } from 'react';
import styled from 'styled-components';

interface FooterLayoutProps {
  children: {
    header: ReactNode;
    body: ReactNode;
    footer: ReactNode;
  };
}

const Wrapper = styled.div`
  box-shadow: 0 -1px 3px 0 rgba(11, 102, 247, 0.4);
  background-color: #0b66f7;
  padding-top: 40px;
`;

const HeaderWrapper = styled.div`
  padding-bottom: 29px;
`;
const BodyWrapper = styled.div`
  padding-bottom: 42px;
`;
const FooterWrapper = styled.div`
  padding-bottom: 32px;
`;

const FooterLayout: SFC<FooterLayoutProps> = ({ children: { header, body, footer } }) => (
  <div style={{ paddingBottom: [] }}>
    <Wrapper>
      <HeaderWrapper>{header}</HeaderWrapper>
      <BodyWrapper>{body}</BodyWrapper>
      <FooterWrapper>{footer}</FooterWrapper>
    </Wrapper>
  </div>
);

export default FooterLayout;
