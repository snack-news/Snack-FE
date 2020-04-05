import React, { FC } from 'react';
import styled from 'styled-components';

interface IProps {}

export const Desc: FC<IProps> = () => (
  <DescWrapper>
    {[
      '스낵은 테크업계 종사자가 궁금해할 비즈니스,기술, 사람에 관한 소식을 모아보는 서비스입니다.',
      '유니콘 기업 소식, 거대 테크기업 동향, 스타트업 창업자 인터뷰 등',
      '빠르게 나오는 소식들을 쉽고 편하게 볼 수 있도록 모아놓았습니다.',
      '더 이상 정보들을 찾아 헤매지말고 스낵에서 얻어가세요!',
    ].map(text => (
      <p key={text}>{text}</p>
    ))}
  </DescWrapper>
);

const DescWrapper = styled.section`
  font-size: 13px;
  line-height: 1.92;
`;
