interface News {
  category: Category;
  content: string;
  createAt: string;
  id: number;
  link?: string;
  modifiedAt: string;
  publishAt?: string;
  tags: Tag[];
  title: string;
  topics: Topic[];
}
