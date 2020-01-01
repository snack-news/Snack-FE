import React, { FC } from 'react';
import styled from 'styled-components';

interface Props {}

export const Nav: FC<Props> = () => <Wrapper>전체</Wrapper>;

const Wrapper = styled.nav`
  display: flex;

  margin: 15px 20px 15px 20px;
`;
