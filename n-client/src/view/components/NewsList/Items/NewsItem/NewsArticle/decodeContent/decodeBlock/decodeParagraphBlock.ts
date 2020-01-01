export interface ContentParagraphBlock {
  type: 'paragraph';
  data: {
    text: string;
  };
}

export const decodeParagraphBlock = (block: ContentParagraphBlock) => `<p>${block.data.text}</p>`;
