import React, { FC } from 'react';

import { dark } from '~nclient/view/atoms/styles/colors';

export const MenuItem: FC = ({ children }) => (
  <li
    css={`
      padding-top: 10px;
      padding-bottom: 10px;
      list-style: none;
    `}
  >
    <a
      href="/"
      css={`
        font-size: 24px;
        font-weight: bold;
        line-height: normal;
        text-decoration: none;
        color: ${dark};

        font-family: 'Noto Sans KR', sans-serif;
      `}
    >
      {children}
    </a>
  </li>
);
