import { useEffect, useState } from 'react';
import axios from 'axios';

export const useCorps = () => {
  const [corps, setCorps] = useState<ICrop[]>();

  useEffect(() => {
    fetchCorps().then(newCorps => setCorps(newCorps));
  }, []);

  return corps;
};

const fetchCorps = async () => {
  const URL = '/api/topic/corp';

  // TODO 서버에서 받아온 값은 모두 믿지 않는 형태의 로직, type 추가 필요
  const res = await axios.get<{ data: ICrop[] }>(URL);

  return res.data.data;
};
