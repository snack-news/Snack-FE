import React, { FC } from 'react';
import styled from 'styled-components';

import { Link } from 'react-router-dom';

import { facebookBlueImg, twitterBlueImg, kakaoBlueImg, emailBlueImg } from '~nclient/resources';

interface Props {}

export const ContactList: FC<Props> = () => (
  <Wrapper>
    <Contact to="https://www.facebook.com/groups/snacknews/" icon={facebookBlueImg} />
    <Contact to="https://twitter.com/techsnacknews" icon={twitterBlueImg} />
    <Contact to="https://open.kakao.com/o/gKIXUx0" icon={kakaoBlueImg} />
    <Contact to="mailto:teamsnackofficial@gmail.com" icon={emailBlueImg} />
  </Wrapper>
);

const Wrapper = styled.section`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;

  margin-bottom: 42px;

  padding-right: 40px;
  padding-left: 40px;
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
