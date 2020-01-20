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
    if (IS_SERVER) return;

    // eslint-disable-next-line no-undef
    const url = `${window.location.protocol}//${window.location.host}`;

    copy(`${url}/newsList/news/${newsId}`);
    setCopied(true);
  }, [newsId]);

  return <CopyLinkButton onClick={onCopy}>{copied ? '복사완료' : '링크복사'}</CopyLinkButton>;
};
