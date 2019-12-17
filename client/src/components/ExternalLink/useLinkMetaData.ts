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
  size?: ImgSize;
}

interface ImgSize {
  height: number;
  width: number;
}

export const useLinkMetaData = (url: string) => {
  const [metaData, setMetaData] = useState<MetaData | null>(null);

  useEffect(() => {
    const getMetaData = async () => {
      const resMetaData = (await axios.get<MetaData>('/node-api/metascraper', {
        params: { url },
      })).data;
      if (resMetaData.image) {
        try {
          const size = await getImageSize(resMetaData.image);
          resMetaData.size = size;
          if (
            resMetaData.size.height < 400 ||
            resMetaData.size.width < 400 ||
            resMetaData.size.height === resMetaData.size.width
          ) {
            delete resMetaData.image;
          }
        } catch (e) {
          delete resMetaData.image;
        }
      }
      setMetaData(resMetaData);
    };

    getMetaData();
  }, [url]);

  return metaData;
};

const getImageSize = (image: string) =>
  new Promise<ImgSize>((resolve, reject) => {
    // eslint-disable-next-line no-undef
    const img = new Image();

    img.onload = () => {
      resolve({ width: img.width, height: img.height });
    };

    img.onerror = e => {
      reject(e);
    };

    img.src = image;
  });
