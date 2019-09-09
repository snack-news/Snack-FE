import { ResponseNews } from './api/types';

export interface NewsFilter extends NewsFilterOptions, DateRange {}

export interface NewsFilterWithWeek extends NewsFilterOptions, WeeklyDateRange {}

export type NewsId = number;

export interface NewsFilterOptions {
  categoryId?: string[];
  topicIds?: string[];
  tagIds?: string[];
}

export interface DateRange {
  startDateTime: Date;
  endDateTime: Date;
}

export interface WeeklyDateRange {
  year: number;
  month: number;
  weekNth: number;
}

export interface INewsService {
  getNews(args: NewsId): Promise<ResponseNews>;
  getNewsList(args: NewsFilter): Promise<ResponseNews[]>;
  getNewsListWithWeek(args: NewsFilterWithWeek): Promise<ResponseNews[]>;
}
