export interface ContentDelimiterBlock {
  type: 'delimiter';
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export const decodeDelimiterBlock = (_block: ContentDelimiterBlock) => '<hr />';
