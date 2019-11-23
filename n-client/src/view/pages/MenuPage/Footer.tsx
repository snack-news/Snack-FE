import React from 'react';
import styled from 'styled-components';

import {
  FacebookWhite,
  TwitterWhite,
  KakaoWhite,
  EmailWhite,
} from '~nclient/view/atoms/styles/Icons';

interface Props {}

export const Footer: React.FC<Props> = () => {
  return (
    <Wrapper>
      <Contact href="/">
        <FacebookWhite
          css={`
            width: 40px;
            height: 40px;
          `}
        />
      </Contact>

      <Contact href="/">
        <TwitterWhite
          css={`
            width: 40px;
            height: 40px;
          `}
        />
      </Contact>

      <Contact href="/">
        <KakaoWhite
          css={`
            width: 40px;
            height: 40px;
          `}
        />
      </Contact>

      <Contact href="/">
        <EmailWhite
          css={`
            width: 40px;
            height: 40px;
          `}
        />
      </Contact>
    </Wrapper>
  );
};

const Wrapper = styled.footer`
  display: flex;
  padding-top: 30px;
  padding-bottom: 30px;

  padding-right: 40px;
  padding-left: 40px;

  > * {
    margin-right: 25px;
  }
`;

const Contact = styled.a``;
