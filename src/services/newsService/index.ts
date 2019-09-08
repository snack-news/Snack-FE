/**
 * API Origin Interface (./api) 를 Wrapping하는 API Wrapping Interface 입니다.
 * API Origin Interface 를 확장 및 은닉 역할을 담당합니다.
 */

import newsApi from './api';
import { INewsService } from './types';
import { parseNewsFIlterToGetParams, parseNewsFIlterWithWeekToGetParams } from './utils';

export class NewsService implements INewsService {
  getNews: INewsService['getNews'] = async newsId => (await newsApi.getNews(newsId)).data;

  getNewsList: INewsService['getNewsList'] = async newsFilter => (await newsApi.getNewsList(parseNewsFIlterToGetParams(newsFilter))).data;

  getNewsListWithWeek: INewsService['getNewsListWithWeek'] = async newsFilter =>
    (await newsApi.getNewsList(parseNewsFIlterWithWeekToGetParams(newsFilter))).data;
}

export default new NewsService();
