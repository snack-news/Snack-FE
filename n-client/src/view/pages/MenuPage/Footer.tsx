import React, { FC } from 'react';
import styled from 'styled-components';

import { Link } from 'react-router-dom';

import {
  facebookWhiteImg,
  twitterWhiteImg,
  kakaoWhiteImg,
  emailWhiteImg,
} from '~nclient/resources';

interface Props {}

export const ContactList: React.FC<Props> = () => {
  return (
    <Wrapper>
      <Contact to="https://www.facebook.com/groups/snacknews/" icon={facebookWhiteImg} />
      <Contact to="https://twitter.com/techsnacknews" icon={twitterWhiteImg} />
      <Contact to="https://open.kakao.com/o/gKIXUx0" icon={kakaoWhiteImg} />
      <Contact to="mailto:teamsnackofficial@gmail.com" icon={emailWhiteImg} />
    </Wrapper>
  );
};

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

const Contact: FC<ContactProps> = ({ to, icon }) => {
  return (
    <Link to={to}>
      <ContactIcon src={icon} />
    </Link>
  );
};

const ContactIcon = styled.img`
  width: 40px;
  height: 40px;
`;
