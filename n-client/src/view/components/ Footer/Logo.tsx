import React from 'react';

import { LogoWhiteFooter } from '~nclient/view/atoms/styles/Icons';

interface Props {}

export const Logo: React.FC<Props> = () => {
  return (
    <LogoWhiteFooter
      css={`
        width: 179px;
        margin: 0px auto;
      `}
    />
  );
};
