import { useParams } from 'react-router';
import { useEffect, useState } from 'react';
import axios from 'axios';

interface RequestParams {
  startDateTime: string;
  endDateTime: string;
  categoryId?: string;
  topicIds?: string;
  tagIds?: string;
}

type URLParams = {} | URLParamsWithWeekRange | URLParamsWithCorpId;

interface URLParamsWithWeekRange {
  year: string;
  month: string;
  week: string;
}

interface URLParamsWithCorpId {
  corpId: string;
}

export const useNewsList = () => {
  const urlParms = useParams<URLParams>();
  const { startDateTime, endDateTime } = urlParamsToRequestParams(urlParms);

  const [newsList, setNewsList] = useState<News[]>();

  useEffect(() => {
    const fetchCorps = async () => {
      const URL = '/api/news';

      const res = await axios.get<{ data: News[] }>(URL, {
        params: { startDateTime, endDateTime },
      });

      setNewsList(res.data.data);
    };

    fetchCorps();
  }, [endDateTime, startDateTime]);

  return newsList;
};

// TODO
const urlParamsToRequestParams = (urlParams: URLParams): RequestParams => {
  const startDateTime = '2019-12-09T00:00';
  const endDateTime = '2019-12-15T23:59';
  console.log(urlParams);
  return { startDateTime, endDateTime };
};
