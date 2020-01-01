import React, { FC } from 'react';

import { CopyLink } from './CopyLink';

interface Props {
  newsId: number;
}

export const NewsFooter: FC<Props> = ({ newsId }) => (
  <>
    <CopyLink newsId={newsId} />
  </>
);
