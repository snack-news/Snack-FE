import { useEffect, useState } from 'react';

import { fetchNewsList } from '~nclient/api/fetchNewsList';

export const useNewsList = (requestParams: INewsFilter) => {
  const [newsList, setNewsList] = useState<INews[]>();

  useEffect(() => {
    fetchNewsList(requestParams).then(resNewsList => setNewsList(resNewsList));
  }, [requestParams]);

  return newsList;
};
