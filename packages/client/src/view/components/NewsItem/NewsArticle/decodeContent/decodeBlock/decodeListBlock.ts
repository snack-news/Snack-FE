export interface IContentListBlock {
  type: 'list';
  data: {
    items: string[];
  };
}

export const decodeListBlock = (block: IContentListBlock) =>
  `<ul>${block.data.items.map(item => `<li>${item}</li>`).join('')}</ul>`;
