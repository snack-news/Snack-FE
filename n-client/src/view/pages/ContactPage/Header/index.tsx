// TODO 구현 필요

import React, { FC } from 'react';

import { Header } from '~nclient/view/components/Header';
import { HorizontalDivider } from '~nclient/view/components/HorizontalDivider';

interface Props {}

export const ContactPageHeader: FC<Props> = () => (
  <>
    <Header />
    <HorizontalDivider thick />
  </>
);
