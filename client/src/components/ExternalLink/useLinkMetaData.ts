import axios from 'axios';
import { useEffect, useState } from 'react';

export interface MetaData {
  author: string | null;
  date: string | null;
  description: string | null;
  image: string | null;
  logo: string | null;
  publisher: string | null;
  title: string | null;
  url: string | null;
}

export const useLinkMetaData = (url:string) => {
  const [metaData, setMetaData] = useState<MetaData | null>(null)

  useEffect(() => {
    const getMetaData = async () => {
      const resMetaData = (await axios.get<MetaData>('/node-api/metascraper', {params: {url}})).data;
      setMetaData(resMetaData);
    }

    getMetaData();
  }, [url])
  
  return metaData;
}

