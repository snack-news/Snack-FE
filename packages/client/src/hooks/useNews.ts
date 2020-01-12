import { useEffect, useState } from 'react';

import { fetchNews } from '~src/api/fetchNews';

export const useNews = (newsId?: string) => {
  const [news, setNews] = useState<INews>();

  useEffect(() => {
    if (newsId) fetchNews(newsId).then(resNews => setNews(resNews));
  }, [newsId]);

  return news;
};
