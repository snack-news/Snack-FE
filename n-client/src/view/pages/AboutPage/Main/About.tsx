import React, { FC } from 'react';
import styled from 'styled-components';

interface Props {}

export const About: FC<Props> = () => (
  <Wrapper>
    <Title>About SNAK</Title>
    <DescWrapper>
      {[
        '스낵은 유니콘 기업 관련 정보 모음 사이트입니다.',
        '혁신의 아이콘인 스타트업들의 소식을 빠르게 쫓아가기 위해 시작된 프로젝트입니다.',
        '그 중에서도 현재 유니콘 기업들 부터 예비 유니콘 기업까지 세상을 빠르게 변화시키는 유니콘들의 뉴스, 관련 글들을 전달드리겠습니다.',
        '저희의 정보들이 여러분들의 의사결정에 도움이 되면 좋겠습니다.',
      ].map(text => (
        <p>{text}</p>
      ))}
    </DescWrapper>
  </Wrapper>
);

const Wrapper = styled.section`
  margin: 40px 20px 60px 20px;
`;

const Title = styled.h2`
  font-size: 21px;
  color: rgb(18, 17, 17);
  margin: 0px 0px 20px 0px;
`;

const DescWrapper = styled.section`
  font-size: 13px;
  line-height: 1.92;
`;
