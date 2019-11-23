import React from 'react';
import styled from 'styled-components';

import { FacebookBlue, TwitterBlue, KakaoBlue, EmailBlue } from '~nclient/view/atoms/styles/Icons';

interface Props {}

export const ContactList: React.FC<Props> = () => {
  return (
    <Wrapper>
      <Contact href="/">
        <FacebookBlue
          css={`
            width: 40px;
            height: 40px;
          `}
        />
      </Contact>

      <Contact href="/">
        <TwitterBlue
          css={`
            width: 40px;
            height: 40px;
          `}
        />
      </Contact>

      <Contact href="/">
        <KakaoBlue
          css={`
            width: 40px;
            height: 40px;
          `}
        />
      </Contact>

      <Contact href="/">
        <EmailBlue
          css={`
            width: 40px;
            height: 40px;
          `}
        />
      </Contact>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;

  margin-bottom: 42px;

  padding-right: 40px;
  padding-left: 40px;
`;

const Contact = styled.a``;
