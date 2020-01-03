interface INews {
  category: ICategory;
  content: string;
  createAt: string;
  id: number;
  link?: string;
  modifiedAt: string;
  publishAt?: string;
  tags: ITag[];
  title: string;
  topics: ITopic[];
}
