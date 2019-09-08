/**
 * API Origin Interface (서버에서 제공하는 API) 가 변경될시 이 파일(디렉토리)만 변경하면 됩니다.
 */

import axios from './axios';
import { NewsApi, ResponseNews } from './types';

class BasicNewsApi implements NewsApi {
  private URL = '/news';

  // TODO 에러상황, 데이터가 제대로 안내려온 상황, 빈배열(?) 처리
  getNews: NewsApi['getNews'] = newsId => axios.get<ResponseNews>(`${this.URL}/${newsId}`);

  // TODO 이번주 API가 아니면 Cache 사용
  getNewsList: NewsApi['getNewsList'] = getParams => axios.get<ResponseNews[]>(this.URL, { params: getParams });
}

export default new BasicNewsApi();
