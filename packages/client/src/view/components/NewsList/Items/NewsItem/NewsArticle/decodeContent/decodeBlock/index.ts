import { IContentHeaderBlock, decodeHeaderBlock } from './decodeHeaderBlock';
import { IContentParagraphBlock, decodeParagraphBlock } from './decodeParagraphBlock';
import { IContentDelimiterBlock, decodeDelimiterBlock } from './decodeDelimiterBlock';
import { IContentImageBlock, decodeImageBlock } from './decodeImageBlock';
import { IContentListBlock, decodeListBlock } from './decodeListBlock';

export type IContentBlock =
  | IContentHeaderBlock
  | IContentParagraphBlock
  | IContentDelimiterBlock
  | IContentImageBlock
  | IContentListBlock;

export const decodeBlock = (block: IContentBlock) => {
  if (block.type === 'header') return decodeHeaderBlock(block);
  if (block.type === 'paragraph') return decodeParagraphBlock(block);
  if (block.type === 'delimiter') return decodeDelimiterBlock(block);
  if (block.type === 'image') return decodeImageBlock(block);
  if (block.type === 'list') return decodeListBlock(block);

  return '';
};
