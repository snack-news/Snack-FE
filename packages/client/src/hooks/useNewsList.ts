import { useEffect, useState } from 'react';

import { useAxios } from './useAxios';

import { NEWS_API_URL } from '~src/constants/API_URL';

export const useNewsList = (
  requestParams: INewsFilter,
  onFatched?: () => void,
  onNoContent?: () => void
) => {
  const [newsList, setNewsList] = useState<INews[]>();
  const res = useAxios<{ data: INews[] }>({
    url: NEWS_API_URL,
    params: requestParams,
    method: 'GET',
  });

  const status = res?.status;
  const data = res?.data?.data;

  useEffect(() => {
    if (!data) {
      return;
    }

    if (onFatched) onFatched();

    if (status === 200) {
      setNewsList(data);
      return;
    }

    if (status === 204) {
      if (onNoContent) onNoContent();
      setNewsList([]);
    }
  }, [data, onFatched, onNoContent, status]);

  return newsList;
};
