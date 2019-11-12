export interface News {
  category: Category;
  content: string;
  createAt: string;
  id: number;
  link: string;
  modifiedAt: string;
  publishAt?: any;
  tags: any[];
  title: string;
  topics: any[];
}

interface Category {
  id: number;
  title: string;
}

interface Tags 