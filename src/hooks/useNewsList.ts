import { useState, useEffect } from 'react';
import Axios from 'axios';

type STATUS = 'pending' | 'success' | 'fail';

export interface IFilter {
  year: number;
  month: number;
  thWeek: number;
}

interface ICategory {
  id: number;
  title: string;
}

interface ITopic {
  id: number;
  type: string;
  name: string;
  image?: string;
}

interface ITag {
  id: number;
  title: string;
}

interface IRequsetNews {
  createAt: Date;
  modifiedAt: Date;
  id: number;
  title: string;
  content: string;
  link?: string;
  category: ICategory;
  topics: ITopic[];
  tags: ITag[];
}

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

const filterToRequestParams = (/* filter: IFilter */) => {
  return {
    // ...filter,
    // ...
    startDateTime: '2019-07-01T00:00',
    endDateTime: '2019-08-31T00:00',
  };
};

interface INewsListState {
  status: STATUS;
  newsList: INews[];
}

const DEFAULT_STATE: INewsListState = {
  status: 'pending',
  newsList: [],
};

const now = new Date();

const DEFAULT_FILTER: IFilter = {
  year: now.getFullYear(),
  month: now.getMonth() + 1,
  thWeek: 1,
};

const useNewsList = (
  InitialFilter?: Partial<IFilter>
): [INewsListState, React.Dispatch<React.SetStateAction<IFilter>>] => {
  const URL = 'api/news';

  const [state, setState] = useState<INewsListState>(DEFAULT_STATE);
  const [filter, setFilter] = useState<IFilter>({ ...DEFAULT_FILTER, ...InitialFilter });

  useEffect(() => {
    const fetchData = async () => {
      setState(DEFAULT_STATE);

      try {
        const result = await Axios(URL, {
          params: filterToRequestParams(),
        });

        setState({
          status: 'success',
          newsList: result.data.data.map(requestNewsToNews),
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
