import React, { FC } from 'react';
import styled from 'styled-components';

import { Link } from 'react-router-dom';

import { facebookBlueImg, twitterBlueImg, kakaoBlueImg, emailBlueImg } from '~nclient/resources';

interface Props {}

export const ContactList: React.FC<Props> = () => {
  return (
    <Wrapper>
      <Title />
      <ContactLinksWrapper>
        <Contact to="https://www.facebook.com/groups/snacknews/" icon={facebookBlueImg} />
        <Contact to="https://twitter.com/techsnacknews" icon={twitterBlueImg} />
        <Contact to="https://open.kakao.com/o/gKIXUx0" icon={kakaoBlueImg} />
        <Contact to="mailto:teamsnackofficial@gmail.com" icon={emailBlueImg} />
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
