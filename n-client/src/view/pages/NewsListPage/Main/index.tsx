import React, { FC } from 'react';

import { NewsList } from './NewsList';

interface Props {
  startDateTime?: string;
  corpId?: string;
}

export const NewsListPageMain: FC<Props> = ({ startDateTime, corpId }) => (
  <NewsList startDateTime={startDateTime} corpId={corpId} />
);
