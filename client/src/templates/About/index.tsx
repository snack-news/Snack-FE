import React from 'react';
import styled from 'styled-components';

import { shuffle } from '~client/utils';
import { BothMarginWrapper, ColListLayout } from '~client/layouts/index';
import { SocialLinkList } from '~client/templates/index';

import AboutPeople, { IAboutPeopleProps } from './AboutPeople';

const owners: IAboutPeopleProps[] = [
  {
    name: '박철현',
    desc:
      'Snack을 통해서 좋은 글을 편하게 받아볼수 있으면 좋겠습니다. Snack 처럼 유용한 서비스를 만드는데 관심을 갖고있는 Front-End 개발자 입니다. 앞으로도 Snack 많이 애용해주세요!',
  },
  {
    name: '이상훈',
    desc:
      '맛있는 Snack을 담는 상자를 만드는 Back-end 개발자입니다. Snack을 통해 모두가 유용한 소식이나 기술들을 더 쉽고 편하게 접할 수 있었으면 좋겠습니다. O잘알이 되는 그 날까지!',
  },
  {
    name: '김영훈',
    desc: '조금이라도 많은 사람들이 Snack 안에서 재미를 느낄 수 있었으면 좋겠습니다. 더 좋은 사용자 경험을 주는 Snack News가 되길 바라며 !',
  },
  {
    name: '권영재',
    desc: 'Snack이 많은 사람들에게 좋은 가치를 전달해 주기 위해 노력하는 Back-end 개발자입니다. 🙂많이 사랑해주세요 ~!',
  },
  {
    name: '허승',
    desc: '모두가 기술에 대해 알게되어 더 나은 세상을 위해 토론하는 세상을 꿈꿉니다. 그런 날이 올때까지 좋은 제품을 만들고싶은 UX디자이너입니다.',
  },
];

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
              Snack Project는 바쁘게 돌아가는 테크업계, 봐야할 뉴스와 들어야할 소식은 많은데 어떻게 수 있을까?라는 생각에서 시작되었습니다.
            </Paragraph>
          </BothMarginWrapper>
        ),
        bottom: '6px',
      },
      {
        el: (
          <BothMarginWrapper>
            <Paragraph>Snack은 꼭 알아야 할, 알면 좋은 테크업계 소식들을 골라서 간단하게 전달해드립니다.</Paragraph>
          </BothMarginWrapper>
        ),
        bottom: '6px',
      },
      {
        el: (
          <BothMarginWrapper>
            <Paragraph>이 프로젝트를 통해 다소 지루했던 출퇴근길이 조금 더 유익해지는 시간이 되었으면 좋겠습니다.</Paragraph>
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
          <ColListLayout.Repeat interval="20px">
            {shuffle(owners).map(owner => (
              <AboutPeople {...owner} />
            ))}
          </ColListLayout.Repeat>
        ),
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

export default About;
