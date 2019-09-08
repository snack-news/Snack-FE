import { AxiosResponse } from 'axios';

export type NewsId = number;

export interface GetParams {
  startDateTime: string;
  endDateTime: string;
  categoryId?: string;
  topicIds?: string;
  tagIds?: string;
}

export interface ResponseNews {
  createAt: Date;
  modifiedAt: Date;
  id: NewsId;
  title: string;
  content: string;
  link?: string;
  category: { id: number; title: string };
  topics: {
    id: number;
    type: string;
    name: string;
    image?: string;
  }[];
  tags: {
    id: number;
    title: string;
  }[];
}

export interface NewsApi {
  getNewsList(args: GetParams): Promise<AxiosResponse<ResponseNews[]>>;
  getNews(args: NewsId): Promise<AxiosResponse<ResponseNews>>;
}
