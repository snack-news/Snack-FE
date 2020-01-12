import React, { FC } from 'react';
import styled from 'styled-components';

import { LinkList } from './LinkList';

import { COOL_GREY } from '~src/constants/colors';

interface IProps {}

export const LinkListItem: FC<IProps> = () => (
  <Wrapper>
    <LinkList />
    <Copyright />
  </Wrapper>
);

const Wrapper = styled.section`
  padding-top: 30px;
  padding-bottom: 30px;
  padding-right: 20px;
  padding-left: 20px;
`;

const Copyright = styled.span.attrs({ children: '© 2019 Snack Project' })`
  font-size: 12px;
  color: ${COOL_GREY};
`;
