import React from 'react';
import styled from 'styled-components';

import { RowListLayout, CardSimpleLayout } from 'Layouts/index';

export const ContactCard = () => (
  <CardSimpleLayout>
    {{
      header: <ContactCardLinks />,
      body: <ContactCardCopyright />,
    }}
  </CardSimpleLayout>
);

const ContactCardLinks = () => (
  <RowListLayout.Repeat interval="8px">
    <ContactCardLink>서비스 안내</ContactCardLink>
    <LinkDivider />
    <ContactCardLink>제안하기</ContactCardLink>
    <LinkDivider />
    <ContactCardLink>문의하기</ContactCardLink>
  </RowListLayout.Repeat>
);

const ContactCardCopyright = styled.span.attrs({ children: '© 2019 Snack Project' })`
  font-size: 12px;
  color: #93939f;
`;

const ContactCardLink = styled.div`
  font-size: 16px;
  font-weight: 500;
  text-align: center;
  color: #0b66f7;
`;

const LinkDivider = styled.div`
  width: 1px;
  height: 17px;
  background-color: #93939f;
`;
