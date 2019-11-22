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

interface Category {
  id: number;
  title: string;
}

interface Tag {
  id: number;
  title: string;
}

interface Topic {
  id: number;
  type: 'CROP' | 'PERSON' | 'FIELD';
  name: string;
  image: string;
}
