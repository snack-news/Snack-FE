import React, { FC } from 'react';

import { Header } from '~src/view/components/Header';
import { HorizontalDivider } from '~src/view/components/HorizontalDivider';

interface IProps {}

export const ProposePageHeader: FC<IProps> = () => (
  <>
    <Header />
    <HorizontalDivider thick />
  </>
);
