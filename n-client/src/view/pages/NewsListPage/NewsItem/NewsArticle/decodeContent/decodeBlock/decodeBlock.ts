import { ContentHeaderBlock, decodeHeaderBlock } from './decodeHeaderBlock';
import {
  ContentParagraphBlock,
  decodeParagraphBlock,
} from './decodeParagraphBlock';
import {
  ContentDelimiterBlock,
  decodeDelimiterBlock,
} from './decodeDelimiterBlock';
import { ContentImageBlock, decodeImageBlock } from './decodeImageBlock';
import { ContentListBlock, decodeListBlock } from './decodeListBlock';

export type ContentBlock =
  | ContentHeaderBlock
  | ContentParagraphBlock
  | ContentDelimiterBlock
  | ContentImageBlock
  | ContentListBlock;

export const decodeBlock = (block: ContentBlock) => {
  if (block.type === 'header') return decodeHeaderBlock(block);
  if (block.type === 'paragraph') return decodeParagraphBlock(block);
  if (block.type === 'delimiter') return decodeDelimiterBlock(block);
  if (block.type === 'image') return decodeImageBlock(block);
  if (block.type === 'list') return decodeListBlock(block);

  return '';
};
