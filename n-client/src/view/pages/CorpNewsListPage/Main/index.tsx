import React, { FC } from 'react';

import { NewsList } from '~nclient/view/components/NewsList';

interface Props {
  corpId?: string;
}

export const CorpNewsListPageMain: FC<Props> = ({ corpId }) => <NewsList corpId={corpId} />;
