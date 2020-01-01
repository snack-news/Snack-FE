export interface ContentImageBlock {
  type: 'image';
  data: {
    caption: string;
    file: {
      url: string;
    };
  };
}

export const decodeImageBlock = (block: ContentImageBlock) =>
  `<img class="img-fluid" src="${block.data.file.url}" title="${block.data.caption}" /><br /><em>${block.data.caption}</em>`;
