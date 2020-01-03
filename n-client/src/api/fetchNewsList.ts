import axios from 'axios';

import { NEWS_API_URL } from './API_URL';

export const fetchNewsList = async (requestParams: INewsFilter) => {
  const res = await axios.get<{ data: INews[] }>(NEWS_API_URL, {
    params: requestParams,
  });

  return res.data.data;
};
