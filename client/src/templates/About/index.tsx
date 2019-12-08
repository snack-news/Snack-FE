import React from 'react';
import styled from 'styled-components';

import { BothMarginWrapper, ColListLayout } from '~client/layouts/index';
import { SocialLinkList } from '~client/templates/index';

const About: React.FunctionComponent = () => (
  <ColListLayout.Detail
    top="40px"
    bottom="32px"
    items={[
      {
        el: (
          <BothMarginWrapper>
            <Title>About SNAK</Title>
          </BothMarginWrapper>
        ),
        bottom: '20px',
      },
      {
        el: (
          <BothMarginWrapper>
            <Paragraph>
              스낵은 유니콘 기업 관련 정보 모음 사이트입니다. <br />
              혁신의 아이콘인 스타트업들의 소식을 빠르게 쫓아가기 위해 시작된
              프로젝트입니다. <br />그 중에서도 현재 유니콘 기업들 부터 예비
              유니콘 기업까지 세상을 빠르게 변화시키는 유니콘들의 뉴스, 관련
              글들을 전달드리겠습니다. <br />
              저희의 정보들이 여러분들의 의사결정에 도움이 되면 좋겠습니다.
            </Paragraph>
          </BothMarginWrapper>
        ),
        bottom: '60px',
      },
      {
        el: (
          <BothMarginWrapper>
            <Title>Social</Title>
          </BothMarginWrapper>
        ),
        bottom: '20px',
      },
      {
        el: (
          <BothMarginWrapper depth={2}>
            <SocialLinkList imgBgType="blue" align="justify" />
          </BothMarginWrapper>
        ),
        bottom: '60px',
      },
    ]}
  />
);

const Title = styled.h1`
  font-size: 21px;
  color: #121111;
  margin: 0;
`;

const Paragraph = styled.p`
  font-size: 13px;
  color: #000000;
  margin: 0;
  line-height: 25px;
`;

export default About;
