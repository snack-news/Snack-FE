import React, { FC } from 'react';

import { CopyLink } from './CopyLink';

interface IProps {
  newsId: number;
}

export const NewsFooter: FC<IProps> = ({ newsId }) => (
  <>
    <CopyLink newsId={newsId} />
  </>
);
