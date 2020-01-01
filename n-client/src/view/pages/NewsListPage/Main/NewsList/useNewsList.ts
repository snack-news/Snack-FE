import axios from 'axios';
import { useEffect, useState } from 'react';

import { getEndDateTime } from '../../getEndDateTime';
import { getStartDateTime } from '../../getStartDateTime';

import { dateToString } from '~nclient/utils/date';

// const BOTTOM_MARGIN = 800;

interface RequestParams {
  startDateTime: string;
  endDateTime: string;
  categoryId?: string;
  topicIds?: string;
  tagIds?: string;
}

interface Filter {
  startDateTime?: string;
  corpId?: string;
}

export const useNewsList = ({ startDateTime, corpId }: Filter) => {
  const [newsList, setNewsList] = useState<News[]>();

  // useEffect(() => {
  //   const scrollHandler = e => {
  //     console.log('scroll', isBottom(BOTTOM_MARGIN));
  //   };
  //   // const root = document.getElementById('root');

  //   // if (root) {
  //   // console.log('addEventListener', root);
  //   window.addEventListener('scroll', scrollHandler);
  //   return () => window.removeEventListener('scroll', scrollHandler);
  //   // }
  // }, []);

  useEffect(() => {
    const requestParams = filterToRequestParams({ startDateTime, corpId });

    const fetchCorps = async () => {
      const URL = '/api/news';

      const res = await axios.get<{ data: News[] }>(URL, {
        params: requestParams,
      });

      setNewsList(res.data.data);
    };

    fetchCorps();
  }, [corpId, startDateTime]);

  return newsList;
};

const filterToRequestParams = (filter: Filter): RequestParams => {
  if (filter.startDateTime) {
    const startDateTime = parseInt(filter.startDateTime, 10);
    const endDateTime = getEndDateTime(new Date(startDateTime));

    return { startDateTime: dateToString(startDateTime), endDateTime: dateToString(endDateTime) };
  }

  const startDateTime = getStartDateTime(new Date());
  const endDateTime = getEndDateTime(startDateTime);

  return { startDateTime: dateToString(startDateTime), endDateTime: dateToString(endDateTime) };
};

// const isBottom = (margin: number) =>
//   window.innerHeight + window.scrollY >= document.body.offsetHeight - margin;
