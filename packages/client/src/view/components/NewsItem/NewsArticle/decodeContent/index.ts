import { decodeBlock, IContentBlock } from './decodeBlock';

export const decodeContent = (content: string) => {
  try {
    const blocks: IContentBlock[] = JSON.parse(content);
    return blocks.map(block => decodeBlock(block)).join('');
  } catch (e) {
    return '';
  }
};
