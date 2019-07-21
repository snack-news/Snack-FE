import React from 'react';
import styled from 'styled-components';

import { BothMarginWrapper } from 'Layouts/BothMarginWrapper';
import {ColListLayout} from "Layouts/ColListLayout";
import {SocialLinkList} from "Templates/SocialLinkList";

const About: React.FunctionComponent = () => (
  <ColListLayout.Detail
    top="40px"
    bottom="32px"
    items={[
      {
        el: (
          <BothMarginWrapper>
            <Title>About Snack Project</Title>
          </BothMarginWrapper>
        ),
        bottom: '20px',
      },
      {
        el: (
          <BothMarginWrapper>
            <Paragraph>
              Snack Project는 바쁘게 돌아가는 테크업계, 봐야할 뉴스와 들어야할 소식은 많은데 어떻게
              수 있을까?라는 생각에서 시작되었습니다.
            </Paragraph>
          </BothMarginWrapper>
        ),
        bottom: '6px',
      },
      {
        el: (
          <BothMarginWrapper>
            <Paragraph>
              Snack은 꼭 알아야 할, 알면 좋은 테크업계 소식들을 골라서 간단하게 전달해드립니다.
            </Paragraph>
          </BothMarginWrapper>
        ),
        bottom: '6px',
      },
      {
        el: (
          <BothMarginWrapper>
            <Paragraph>
              이 프로젝트를 통해 다소 지루했던 출퇴근길이 조금 더 유익해지는 시간이 되었으면 좋겠습니다.
            </Paragraph>
          </BothMarginWrapper>
        ),
        bottom: '8px',
      },
      {
        el: (
          <BothMarginWrapper>
            <Paragraph>언젠가 Snack 없이 어떻게 지냈지? 라는 날이 오기를 바라며!</Paragraph>
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
      {
        el: (
          <BothMarginWrapper>
            <Title>People</Title>
          </BothMarginWrapper>
        ),
        bottom: '20px',
      },
      {
        el: (
          <BothMarginWrapper>
            <SubTitle>허승</SubTitle>
          </BothMarginWrapper>
        ),
        bottom: '8px',
      },
      {
        el: (
          <BothMarginWrapper>
            <Paragraph>
              모두가 기술에 대해 알게되어 더 나은 세상을 위해 토론하는 세상을 꿈꿉니다. 그런 날이 올
              때까지 좋은 제품을 만들고싶은 UX디자이너입니다.
            </Paragraph>
          </BothMarginWrapper>
        ),
        bottom: '20px',
      },
      {
        el: (
          <BothMarginWrapper>
            <SubTitle>박철현</SubTitle>
          </BothMarginWrapper>
        ),
        bottom: '8px',
      },
      {
        el: (
          <BothMarginWrapper>
            <Paragraph>
              모두가 기술에 대해 알게되어 더 나은 세상을 위해 토론하는 세상을 꿈꿉니다. 그런 날이 올
              때까지 좋은 제품을 만들고싶은 UX디자이너입니다.
            </Paragraph>
          </BothMarginWrapper>
        ),
        bottom: '20px',
      },
      {
        el: (
          <BothMarginWrapper>
            <SubTitle>권영재</SubTitle>
          </BothMarginWrapper>
        ),
        bottom: '8px',
      },
      {
        el: (
          <BothMarginWrapper>
            <Paragraph>
              모두가 기술에 대해 알게되어 더 나은 세상을 위해 토론하는 세상을 꿈꿉니다. 그런 날이 올
              때까지 좋은 제품을 만들고싶은 UX디자이너입니다.
            </Paragraph>
          </BothMarginWrapper>
        ),
        bottom: '20px',
      },
      {
        el: (
          <BothMarginWrapper>
            <SubTitle>김영훈</SubTitle>
          </BothMarginWrapper>
        ),
        bottom: '8px',
      },
      {
        el: (
          <BothMarginWrapper>
            <Paragraph>
              모두가 기술에 대해 알게되어 더 나은 세상을 위해 토론하는 세상을 꿈꿉니다. 그런 날이 올
              때까지 좋은 제품을 만들고싶은 UX디자이너입니다.
            </Paragraph>
          </BothMarginWrapper>
        ),
        bottom: '20px',
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
  line-height: 20px;
`;

const SubTitle = styled.h2`
  font-size: 17px;
  font-weight: 600;
  color: #0b66f7;
`;

export default About;
