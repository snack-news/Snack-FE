/* eslint-disable max-lines */

import React, { FC } from 'react';
import styled from 'styled-components';

import { BLACK } from '~src/constants/colors';

interface IProps {}

export const AddSlackPageMain: FC<IProps> = () => (
  <Wrapper>
    <Title>SNAK Slack Bot</Title>
    <Desc />
    <SlackButton />
  </Wrapper>
);

const Wrapper = styled.section`
  margin: 40px 20px 60px 20px;
`;

const Title = styled.h2`
  font-size: 21px;
  color: ${BLACK};
  margin: 0px 0px 20px 0px;
`;

const Desc: FC<IProps> = () => (
  <DescWrapper>
    <p>스낵뉴스를 슬랙으로 받아보세요</p>
  </DescWrapper>
);

const DescWrapper = styled.section`
  font-size: 13px;
  line-height: 1.92;
`;

const SlackButton: FC = () => (
  <a href="https://slack.com/oauth/v2/authorize?client_id=735742920643.1012830161414&scope=incoming-webhook">
    <img
      alt="Add to Slack"
      height="40"
      width="139"
      src="https://platform.slack-edge.com/img/add_to_slack.png"
      srcSet="https://platform.slack-edge.com/img/add_to_slack.png 1x, https://platform.slack-edge.com/img/add_to_slack@2x.png 2x"
    />
  </a>
);
