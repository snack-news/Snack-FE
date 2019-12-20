import { useEffect, useState } from 'react';
import axios from 'axios';

interface ICrop {
  id: number;
  type: string;
  name: string;
  image: string | null;
}

export const useCorps = () => {
  const [corps, setCorps] = useState();
  useEffect(() => {
    const fetchCorps = async () => {
      const URL = '/api/topic/corp';

      const res = await axios.get<{ data: ICrop[] }>(URL);

      setCorps(res.data.data);
    };

    fetchCorps();
  }, []);

  return corps;
};
