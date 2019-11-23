import React from 'react';
import styled from 'styled-components';

import { FacebookBlue, TwitterBlue, KakaoBlue, EmailBlue } from '~nclient/view/atoms/styles/Icons';

interface Props {}

export const ContactList: React.FC<Props> = () => {
  return (
    <Wrapper>
      <Title />
      <ContactLinksWrapper>
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
      </ContactLinksWrapper>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  margin: 0px 20px 0px 20px;
`;

const Title = styled.h2.attrs({ children: 'Social' })`
  font-size: 21px;
  color: rgb(18, 17, 17);
  margin: 0px 0px 20px 0px;
`;

const ContactLinksWrapper = styled.div`
  margin: 0px 20px 0px 20px;

  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

const Contact = styled.a``;
