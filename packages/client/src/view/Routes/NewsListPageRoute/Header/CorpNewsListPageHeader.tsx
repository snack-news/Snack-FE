import React, { FC } from 'react';

import { Header } from '~src/view/components/Header';
import { HorizontalDivider } from '~src/view/components/HorizontalDivider';

interface IProps {
  corpName: string;
}

export const CorpNewsListPageHeader: FC<IProps> = ({ corpName }) => (
  <>
    <Header leftAnchor="BACK" title={`${corpName} 뉴스 모아보기`} />
    <HorizontalDivider thick />
  </>
);
