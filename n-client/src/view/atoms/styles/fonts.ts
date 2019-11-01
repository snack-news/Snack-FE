import { css } from 'styled-components';

const DefaultFontFamily = css`
  font-family: 'Noto Sans KR', sans-serif;
`;

export const little = css`
  font-size: 11px;
  height: 11px;
  line-height: 11px;
  font-weight: 500;

  ${DefaultFontFamily}
`;

export const littleMedium = css`
  font-size: 15px;
  height: 15px;
  line-height: 15px;

  ${DefaultFontFamily}
`;
