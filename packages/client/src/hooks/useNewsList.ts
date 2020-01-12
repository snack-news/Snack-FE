import { useEffect, useState } from 'react';

import { fetchNewsList } from '~src/api/fetchNewsList';

export const useNewsList = (
  requestParams: INewsFilter,
  onFatched?: () => void,
  onNoContent?: () => void
) => {
  const [newsList, setNewsList] = useState<INews[]>();

  useEffect(() => {
    fetchNewsList(requestParams).then(res => {
      if (onFatched) onFatched();

      if (res.status === 200) {
        setNewsList(res.data.data);
        return;
      }

      if (res.status === 204) {
        if (onNoContent) onNoContent();
        setNewsList([]);
      }
    });
  }, [onFatched, onNoContent, requestParams]);

  return newsList;
};
