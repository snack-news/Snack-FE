import React, { FC } from 'react';
import styled from 'styled-components';

import { Contact } from './Contact';

import { facebookBlueImg, twitterBlueImg, kakaoBlueImg, emailBlueImg } from '~nclient/resources';

interface Props {}

export const ContactList: FC<Props> = () => (
  <Wrapper>
    <Title>Social</Title>
    <ContactLinksWrapper>
      <Contact to="https://www.facebook.com/groups/snacknews/" icon={facebookBlueImg} />
      <Contact to="https://twitter.com/techsnacknews" icon={twitterBlueImg} />
      <Contact to="https://open.kakao.com/o/gKIXUx0" icon={kakaoBlueImg} />
      <Contact to="mailto:teamsnackofficial@gmail.com" icon={emailBlueImg} />
    </ContactLinksWrapper>
  </Wrapper>
);

const Wrapper = styled.section`
  margin: 0px 20px 0px 20px;
`;

const Title = styled.h2`
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
