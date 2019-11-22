import { decodeBlock, ContentBlock } from './decodeBlock/decodeBlock';

export const decodeContent = (content: string) => {
  try {
    const blocks: ContentBlock[] = JSON.parse(content);
    return blocks.map(block => decodeBlock(block)).join('');
  } catch (e) {
    return '';
  }
};
