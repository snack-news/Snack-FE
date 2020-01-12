export const isNews = (news?: INews): news is INews => {
  const newsKeys: (keyof INews)[] = [
    'category',
    'content',
    'createAt',
    'id',
    'modifiedAt',
    'tags',
    'title',
    'topics',
  ];

  return typeof news === 'object' && newsKeys.every(key => news[key] !== undefined);
};
