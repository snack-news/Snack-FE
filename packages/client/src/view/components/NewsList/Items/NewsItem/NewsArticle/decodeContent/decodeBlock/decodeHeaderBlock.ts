export interface IContentHeaderBlock {
  type: 'header';
  data: {
    level: string;
    text: string;
  };
}

export const decodeHeaderBlock = (block: IContentHeaderBlock) =>
  `<h${block.data.level}>${block.data.text}</h${block.data.level}>`;
