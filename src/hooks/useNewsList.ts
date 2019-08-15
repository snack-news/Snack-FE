import { useState, useEffect } from 'react';
import axios from 'axios';

type STATUS = 'pending' | 'success' | 'fail';

interface INewsListState {
  status: STATUS;
  newsList: INews[];
}

export interface IFilter {
  year: number;
  month: number;
  thWeek: number;
}

interface IRequsetNews {
  createAt: Date;
  modifiedAt: Date;
  id: number;
  title: string;
  content: string;
  link?: string;
  category: { id: number; title: string };
  topics: {
    id: number;
    type: string;
    name: string;
    image?: string;
  }[];
  tags: {
    id: number;
    title: string;
  }[];
}

const DEFAULT_STATE: INewsListState = {
  status: 'pending',
  newsList: [],
};

const DEFAULT_FILTER: IFilter = ((now: Date) => ({
  year: now.getFullYear(),
  month: now.getMonth() + 1,
  thWeek: 1,
}))(new Date());

const useNewsList = (
  InitialFilter?: Partial<IFilter>
): [INewsListState, React.Dispatch<React.SetStateAction<IFilter>>] => {
  const URL = '/api/news';

  const [state, setState] = useState<INewsListState>(DEFAULT_STATE);
  const [filter, setFilter] = useState<IFilter>({ ...DEFAULT_FILTER, ...InitialFilter });

  useEffect(() => {
    const fetchData = async () => {
      setState(DEFAULT_STATE);

      try {
        const result = await axios.get(URL, {
          params: filterToRequestParams(),
        });

        const requestNewsList = result.data.data;

        setState({
          status: 'success',
          newsList: requestNewsList.map(requestNewsToNews),
        });
      } catch (error) {
        setState({
          ...DEFAULT_STATE,
          status: 'fail',
        });
      }
    };

    fetchData();
  }, [filter]);

  return [state, setFilter];
};

export default useNewsList;

const filterToRequestParams = (/* filter: IFilter */) => {
  // TODO 개발 필요.
  return {
    // ...filter,
    // ...
    startDateTime: '2019-07-01T00:00',
    endDateTime: '2019-08-31T00:00',
  };
};

const requestNewsToNews = (news: IRequsetNews): INews => ({
  title: news.title,
  content: news.content,
  tags: [
    ...news.tags.map(({ id, title }) => ({
      highlight: true,
      children: title,
      key: `tag_${id}`,
    })),
    ...news.topics
      .filter(({ type }) => type === 'CROP')
      .map(({ id, name }) => ({
        highlight: false,
        children: name,
        key: `topics_${id}`,
      })),
  ],
  link: {
    href: news.link,
  },
  createdDate: new Date(news.createAt).getTime(),
  key: `${news.id}`,
});
