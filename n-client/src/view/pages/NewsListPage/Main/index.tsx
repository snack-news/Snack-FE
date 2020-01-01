import React, { FC } from 'react';

import { NewsList } from '~nclient/view/components/NewsList';

interface Props {
  startDateTime?: string;
}

export const NewsListPageMain: FC<Props> = ({ startDateTime }) => (
  <NewsList startDateTime={startDateTime} />
);
