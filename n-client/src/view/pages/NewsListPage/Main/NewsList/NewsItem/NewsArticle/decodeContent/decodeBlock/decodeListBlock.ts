export interface ContentListBlock {
  type: 'list';
  data: {
    items: string[];
  };
}

export const decodeListBlock = (block: ContentListBlock) =>
  `<ul>${block.data.items.map(item => `<li>${item}</li>`).join('')}</ul>`;
