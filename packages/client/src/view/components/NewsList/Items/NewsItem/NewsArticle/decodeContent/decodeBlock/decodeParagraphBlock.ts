export interface IContentParagraphBlock {
  type: 'paragraph';
  data: {
    text: string;
  };
}

export const decodeParagraphBlock = (block: IContentParagraphBlock) => `<p>${block.data.text}</p>`;
