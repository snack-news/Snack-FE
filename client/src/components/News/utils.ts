interface editorJsBlock {
  type: string;
  data: {
    level: string;
    text: string;
    caption: string;
    file: {
      url: string;
    };
    items: string[];
  };
}

export const render = (content: string) => {
  try {
    const blocks: editorJsBlock[] = JSON.parse(content);

    return blocks
      .map(block => {
        switch (block.type) {
          case 'header':
            return `<h${block.data.level}>${block.data.text}</h${block.data.level}>`;
          case 'paragraph':
            return `<p>${block.data.text}</p>`;
          case 'delimiter':
            return '<hr />';
          case 'image':
            return `<img class="img-fluid" src="${block.data.file.url}" title="${block.data.caption}" /><br /><em>${block.data.caption}</em>`;
          case 'list':
            return `<ul>${block.data.items
              .map(li => `<li>${li}</li>`)
              .join('')}</ul>`;
          default:
            console.log('Unknown block type', block.type);
            console.log(block);
            return '';
        }
      })
      .join('');
  } catch (e) {
    console.log(e);
    return '';
  }
};
