import React, { FC } from 'react';
import styled from 'styled-components';

interface IProps {}

export const Nav: FC<IProps> = () => <Wrapper>전체</Wrapper>;

const Wrapper = styled.nav`
  display: flex;

  margin: 15px 20px 15px 20px;
`;
