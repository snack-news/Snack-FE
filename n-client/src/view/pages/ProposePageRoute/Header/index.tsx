import React, { FC } from 'react';

import { Header } from '~nclient/view/components/Header';
import { HorizontalDivider } from '~nclient/view/components/HorizontalDivider';

interface IProps {}

export const ProposePageHeader: FC<IProps> = () => (
  <>
    <Header />
    <HorizontalDivider thick />
  </>
);
