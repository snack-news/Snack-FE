import React, { FC, useState } from 'react';
import CopyToClipboard from 'react-copy-to-clipboard';

import { CopyLinkButton } from './CopyLinkButton';

interface Props {
  newsId: number;
}

export const CopyLink: FC<Props> = ({ newsId }) => {
  const [copied, setCopied] = useState(false);
  console.log(`https://snak.news/news/${newsId}`);

  return (
    // TODO URL 상수화
    // TODO Copy 기능 추가
    <CopyToClipboard text={`https://snak.news/news/${newsId}`} onCopy={() => setCopied(true)}>
      <CopyLinkButton>{copied ? '복사완료' : '링크복사'}</CopyLinkButton>
    </CopyToClipboard>
  );
};
