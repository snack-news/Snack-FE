import newsApi from '../api/news';
import { INewsService } from './types';
import { parseNewsFIlterToGetParams, parseNewsFIlterWithWeekToGetParams } from './utils';

export class NewsService implements INewsService {
  getNews: INewsService['getNews'] = async newsId => (await newsApi.getNews(newsId)).data;

  getNewsList: INewsService['getNewsList'] = async newsFilter => (await newsApi.getNewsList(parseNewsFIlterToGetParams(newsFilter))).data;

  getNewsListWithWeek: INewsService['getNewsListWithWeek'] = async newsFilter =>
    (await newsApi.getNewsList(parseNewsFIlterWithWeekToGetParams(newsFilter))).data;
}

export default new NewsService();
