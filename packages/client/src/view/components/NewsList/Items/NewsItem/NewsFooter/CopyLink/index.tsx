import React, { FC, useState, useCallback } from 'react';
import copy from 'copy-to-clipboard';

import { CopyLinkButton } from './CopyLinkButton';

interface IProps {
  newsId: number;
}

// TODO URL 상수화
// TODO Copy 기능 추가
export const CopyLink: FC<IProps> = ({ newsId }) => {
  const [copied, setCopied] = useState(false);

  const onCopy = useCallback(() => {
    copy(`https://snak.news/news/${newsId}`);
    setCopied(true);
  }, [newsId]);

  return <CopyLinkButton onClick={onCopy}>{copied ? '복사완료' : '링크복사'}</CopyLinkButton>;
};
