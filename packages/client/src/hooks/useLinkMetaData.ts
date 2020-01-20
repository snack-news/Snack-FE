import axios from 'axios';
import { useEffect, useState } from 'react';

export interface IMetaData {
  author: string | null;
  date: string | null;
  description: string | null;
  image: string | null;
  logo: string | null;
  publisher: string | null;
  title: string | null;
  url: string | null;
}

export const useLinkMetaData = (url: string) => {
  const [metaData, setMetaData] = useState<IMetaData | null>(null);

  useEffect(() => {
    const asyncSetMetaData = async () => {
      const resMetaData = await getMetaData(url);

      setMetaData(resMetaData);
    };

    asyncSetMetaData();
  }, [url]);

  return metaData;
};

const getMetaData = async (url: string) => {
  const resMetaData = (
    await axios.get<IMetaData>('/node-api/metascraper', {
      params: { url },
    })
  ).data;

  return resMetaData;
};
