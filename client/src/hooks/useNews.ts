import { useState, useEffect } from 'react';
import axios from 'axios';

import { INewsProps } from '~client/components';

export const useNews = (id?: number) => {
  const [news, setNews] = useState<INewsProps | null>(null);

  useEffect(() => {
    const fetchNews = async () => {
      const res = await axios.get<{ data: INews }>(`/api/news/${id}`);
      setNews({
        ...res.data.data,
        newsId: `${res.data.data.id}`,
        expanded: true,
      });
    };

    fetchNews();
  }, [id]);

  return news;
};
