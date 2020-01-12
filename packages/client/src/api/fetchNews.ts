import axios from 'axios';

import { NEWS_API_URL } from './API_URL';

export const fetchNews = async (newsId: string) => {
  const res = await axios.get<{ data: INews }>(`${NEWS_API_URL}/${newsId}`);

  return res.data.data;
};
