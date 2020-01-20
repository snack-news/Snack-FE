import { useAxios } from './useAxios';

import { NEWS_API_URL } from '~src/constants/API_URL';

export const useNews = (newsId?: number) => {
  const res = useAxios<{ data: INews }>({ url: `${NEWS_API_URL}/${newsId}`, method: 'GET' });

  if (!res || newsId === undefined) {
    return undefined;
  }

  return res.data.data;
};
