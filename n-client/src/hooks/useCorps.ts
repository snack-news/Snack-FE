import { useEffect, useState } from 'react';
// import axios from 'axios';

import { resCorpsData } from './corpsMock';

interface ICrop {
  id: number;
  type: string;
  name: string;
  image: string;
}

export const useCorps = () => {
  const [corps, setCorps] = useState<ICrop[]>();
  useEffect(() => {
    const fetchCorps = async () => {
      // const URL = '/api/topic/corp';

      // TODO 서버에서 받아온 값은 모두 믿지 않는 형태의 로직, type 추가 필요
      // const res = await axios.get<{ data: ICrop[] }>(URL);
      const res = { data: resCorpsData };

      setCorps(res.data.data);
    };

    fetchCorps();
  }, []);

  return corps;
};
