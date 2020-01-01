import React, { FC } from 'react';
import styled from 'styled-components';

import { Link } from 'react-router-dom';

import {
  facebookWhiteImg,
  twitterWhiteImg,
  kakaoWhiteImg,
  emailWhiteImg,
} from '~nclient/resources';
import { facebookURL, twitterURL, kakaoURL, emailURL } from '~nclient/constants/urls';

interface Props {}

export const ContactList: FC<Props> = () => (
  <Wrapper>
    <Contact to={facebookURL} icon={facebookWhiteImg} />
    <Contact to={twitterURL} icon={twitterWhiteImg} />
    <Contact to={kakaoURL} icon={kakaoWhiteImg} />
    <Contact to={emailURL} icon={emailWhiteImg} />
  </Wrapper>
);

const Wrapper = styled.section`
  display: flex;
  padding-top: 30px;
  padding-bottom: 30px;

  padding-right: 40px;
  padding-left: 40px;

  > * {
    margin-right: 25px;
  }
`;

interface ContactProps {
  to: string;
  icon: string;
}

const Contact: FC<ContactProps> = ({ to, icon }) => (
  <Link to={to}>
    <ContactIcon src={icon} />
  </Link>
);

const ContactIcon = styled.img`
  width: 40px;
  height: 40px;
`;
