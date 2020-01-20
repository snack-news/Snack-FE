export interface IContentDelimiterBlock {
  type: 'delimiter';
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export const decodeDelimiterBlock = (_block: IContentDelimiterBlock) => '<hr />';
