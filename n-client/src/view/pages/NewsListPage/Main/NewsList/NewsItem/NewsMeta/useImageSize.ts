import { useEffect, useState } from 'react';

interface ImgSize {
  height: number;
  width: number;
}

export const useImageSize = (image: string) => {
  const [imgSize, setImgSize] = useState<ImgSize>();

  useEffect(() => {
    const asyncGetImageSize = async () => {
      const resImgSize = await getImageSize(image);
      setImgSize(resImgSize);
    };

    asyncGetImageSize();
  }, [image]);

  return imgSize;
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
