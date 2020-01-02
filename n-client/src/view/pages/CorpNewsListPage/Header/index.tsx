import React, { FC } from 'react';

import { Header } from '~nclient/view/components/Header';
import { HorizontalDivider } from '~nclient/view/components/HorizontalDivider';

interface Props {
  corpName?: string;
}

export const CorpNewsListPageHeader: FC<Props> = ({ corpName }) => (
  <>
    <Header leftAnchor="BACK" title={`${corpName} 뉴스 모아보기`} />
    <HorizontalDivider thick />
  </>
);
