import { useState, useEffect } from 'react';
import axios from 'axios';
import dateFns from 'date-fns';

type STATUS = 'pending' | 'success' | 'fail';

interface INewsListState {
  status: STATUS;
  newsList: INews[];
}

export interface IFilter {
  year: string;
  month: string;
  week: string;
}

interface IResponseNews {
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

const useNewsList = (filter: IFilter): [INewsListState] => {
  const URL = '/api/news';

  const [state, setState] = useState<INewsListState>(DEFAULT_STATE);

  useEffect(() => {
    const fetchData = async () => {
      setState(DEFAULT_STATE);

      try {
        const result = await axios.get(URL, {
          params: filterToRequestParams(filter),
        });

        const responseNewsList = result.data.data;

        setState({
          status: 'success',
          newsList: responseNewsList.map(parseResponseNews),
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

  return [state];
};

export default useNewsList;

const filterToRequestParams = (filter: IFilter) => {
  const year = parseInt(filter.year, 10);
  const month = parseInt(filter.month, 10) - 1;
  const week = parseInt(filter.week, 10);

  return getNthWeek(year, month, week);
};

const getDayStartMonday = (d: Date) => (d.getDay() || 7) - 1;

const getNthWeek = (year: number, month: number, week: number) => {
  const startDate = getNthWeekFirstDate(year, month, week);
  let endDate = new Date(
    startDate.getFullYear(),
    startDate.getMonth(),
    startDate.getDate() + (6 - getDayStartMonday(startDate))
  );

  if (endDate.getMonth() !== startDate.getMonth()) {
    endDate = new Date(startDate.getFullYear(), startDate.getMonth() + 1, 0);
  }

  return {
    startDateTime: dateToString(startDate),
    endDateTime: dateToString(dateFns.endOfDay(endDate)),
  };
};

const dateToString = (date: Date) => {
  const year = date.getFullYear();
  const month = `${date.getMonth() + 1}`.padStart(2, '0');
  const d = `${date.getDate()}`.padStart(2, '0');
  const hours = `${date.getHours()}`.padStart(2, '0');
  const minutes = `${date.getMinutes()}`.padStart(2, '0');

  return `${year}-${month}-${d}T${hours}:${minutes}`;
};

const getNthWeekFirstDate = (year: number, month: number, week: number): Date => {
  const firstDate = new Date(year, month);

  if (week === 1) {
    return firstDate;
  }

  const firstDay = getDayStartMonday(firstDate);
  const firstWeekLength = 7 - firstDay;
  const startDate = new Date(year, month, 7 * (week - 2) + firstWeekLength + 1);

  if (startDate.getFullYear() !== year || startDate.getMonth() !== month) {
    const lastDateOfMonth = new Date(year, month + 1, 0);
    const lastDayOfMonth = getDayStartMonday(lastDateOfMonth);
    const lastMonday = new Date(year, month, lastDateOfMonth.getDate() - lastDayOfMonth);

    return lastMonday;
  }

  return startDate;
};

const parseResponseNews = (news: IResponseNews): INews => ({
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
  ...(news.link && {
    link: {
      href: news.link,
    },
  }),
  createdDate: new Date(news.createAt).getTime(),
  key: `${news.id}`,
});
