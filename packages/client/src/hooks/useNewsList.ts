import { useEffect, useState } from 'react';

import { useAxios } from './useAxios';

import { HTTP_STATUS_CODES } from '../constants/HTTP_STATUS_CODES';

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
    if (status && onFatched) {
      onFatched();
    }

    if (status === HTTP_STATUS_CODES.OK) {
      setNewsList(data);
      return;
    }

    if (status === HTTP_STATUS_CODES.NO_CONTENT) {
      if (onNoContent) onNoContent();
      setNewsList([]);
    }
  }, [data, onFatched, onNoContent, status]);

  return newsList;
};
