import React, { FC } from 'react';
import styled from 'styled-components';

import { WHITE_THREE, BRIGHT_BLUE, COOL_GREY } from '~nclient/constants/colors';

interface IProps {}
export const ContactFrom: FC<IProps> = () => (
  <Wrapper>
    <Input type="text" placeholder="링크소개" />
    <Input type="text" placeholder="소개에 대한 의견" />
    <Input type="text" placeholder="키워드 입력(쉼표로 분리)" />
    <Submit />
  </Wrapper>
);

const Wrapper = styled.section`
  margin: 34px 40px 0px 40px;

  > input {
    margin-bottom: 20px;
  }

  > input:last-of-type {
    margin-bottom: 40px;
  }
`;

const Input = styled.input`
  width: 100%;
  height: 40px;
  background-color: ${WHITE_THREE};
  font-size: 12px;
  padding: 13px 20px;
  border: 0.5px solid ${COOL_GREY};

  box-sizing: border-box;
`;

const Submit = styled.button.attrs({ children: '제출하기' })`
  display: block;
  margin: 0 auto 112px auto;

  width: 103px;
  height: 32px;
  background-color: ${BRIGHT_BLUE};
  font-size: 14px;
  font-weight: 500;
  color: ${WHITE_THREE};
  border: 0px;
`;
