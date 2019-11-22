export interface ContentHeaderBlock {
  type: 'header';
  data: {
    level: string;
    text: string;
  };
}

export const decodeHeaderBlock = (block: ContentHeaderBlock) =>
  `<h${block.data.level}>${block.data.text}</h${block.data.level}>`;
