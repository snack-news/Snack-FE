import React from 'react';
import styled from 'styled-components';

interface Props {}

export const ContactFrom: React.FC<Props> = () => (
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
  background-color: rgb(254, 254, 254);
  font-size: 12px;
  padding: 13px 20px;
  border: 0.5px solid rgb(147, 147, 159);

  box-sizing: border-box;
`;

const Submit = styled.button.attrs({ children: '제출하기' })`
  display: block;
  margin: 0 auto 112px auto;

  width: 103px;
  height: 32px;
  background-color: rgb(11, 102, 247);
  font-size: 14px;
  font-weight: 500;
  color: rgb(254, 254, 254);
  border: 0px;
`;
